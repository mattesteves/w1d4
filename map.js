





var words = ["ground", "control", "to", "major", "tom"];

function map(arr, func){
		var newArr=[]
	for (elm of arr){
		newArr.push(func(elm));
		}
		console.log(newArr)
}

map(words, function(word) {
  return word.length;
});
map(words, function(word) {
  return word.toUpperCase();
});
map(words, function(word) {
  return word.split('').reverse().join('');
});

