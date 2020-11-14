/* function getTempCallBack(location, callback) {
  callback(null,78);
};

getTempCallBack('India', function(err, temp) {
  if(err) {
    console.log('error ', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(79);
      reject('City not found!');
    }, 1000);
  });
}

getTempPromise('India').then(function (temp) {
  console.log('Success ', temp);
}, function(err) {
  console.log('Failue ', err);
}); */

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    //setTimeout(function(){
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject ('Invalid Input');
      }
    //},1000);
  });
}

addPromise(10,2).then(function(sum){
  console.log(sum);
}, function(err){
  console.log(err);
});
