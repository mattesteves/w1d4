// The second argument/parameter is expected to be a function

function checkWaldo(arr){
	if (arr === "Waldo"){ actionWhenFound()}
}

function findWaldo(arr) {
	arr.forEach(checkWaldo)
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);