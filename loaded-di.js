function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
 var inc=-1;
  return function() {
    /* your code here */
  
     	inc+=1
     	var dice= list[inc]
     	return dice
     

	// end of code   
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6