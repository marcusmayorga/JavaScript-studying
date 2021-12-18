// b() is in globalenvironment
// function b() {
//   console.log(myVar);
// }

// function a() {
//   var myVar = 2;
//   b();
// }

// var myVar = 1;
// a();

// Changeing the environment for b()

function a() {

  function b() {
    console.log(myVar);
  }

  var myVar = 2;
  b();
}

var myVar = 1;
a();