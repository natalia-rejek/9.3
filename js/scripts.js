var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "Triceratops is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var nameUpperCased = dinosaur.toUpperCase();
console.log(nameUpperCased);

var partOfSentence = nameUpperCased.slice(0,11);

var replacedText = text.replace('Velociraptor', partOfSentence);

var mottoCharsAfter = replacedText.substr(0, replacedText.length/2);

console.log(mottoCharsAfter)