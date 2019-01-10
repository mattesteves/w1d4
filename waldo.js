function findWaldo(arr, found) {
  arr.forEach(function checkWaldo(arr){
	if (arr === "Waldo"){ 
		actionWhenFound(arr.indexOf('Waldo')) } {
  }
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// // The second argument/parameter is expected to be a function

// function checkWaldo(arr){
// 	if (arr === "Waldo"){ 
// 		actionWhenFound(arr.indexOf('Waldo')) }
// }
// function findWaldo(arr) {
// 	arr.forEach(checkWaldo)
// }

// function actionWhenFound(result) {	
//   console.log("Found him! at", result);
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"]);

// // bleep=["Alice", "Bob", "Waldo", "Winston"]
// // console.log(bleep.indexOf('Waldo'))
