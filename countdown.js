var countdownGenerator = function (x) {
  /* your code here */

  var newNum=x+1;
  return function() {
  	newNum -= 1;
  	if (newNum > 0){
  		console.log("T-minus " + newNum + '...')	
  	}
  	else if (newNum === 0){ console.log("Blast off!")}

  		else console.log("Rocket\'s already gone, bub!")
  	}
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!