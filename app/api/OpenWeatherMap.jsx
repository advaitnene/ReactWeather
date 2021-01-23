var axios = require('axios');

const OPEN_MAP_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9da7f2b807ce0ee286619e6908074f4c&units=metric';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURl = `${OPEN_MAP_WEATHER_URL}&q=${encodedLocation}`;

    return axios.get(requestURl).then(function(res){
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(err) {
        throw new Error(err.response.data.message);
        //throw new Error('Static Error. Unable to find the city.');
    });
  }
}
