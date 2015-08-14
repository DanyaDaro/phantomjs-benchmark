var system = require('system'),
    page = require('webpage').create(),
    address = system.args[1],
    t,
    iteration = 50, // requests
    tagname = 'timegenerate', //tag name
    array = [],
    count = 1;

function mean(array) {
  var sum = 0;
  for(var k = 0; k < array.length; k++){
    sum = parseFloat(sum) + parseFloat(array[k]);
  }
  return sum / array.length;
}

function benchmark(){
  page.open(address, function () {
    t = page.evaluate(function(){
      return document.getElementsByTagName(tagname)[0].innerHTML;
    });
  });
  page.onLoadFinished = function() {
    array.push(t);
    console.log(count + ': Get value - ' + t);
    if(count == iteration){
      console.log('Arithmetic mean: ' + mean(array));
      phantom.exit();
    }
    count++;
    benchmark();
  };
}
benchmark();
