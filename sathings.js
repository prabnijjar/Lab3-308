// make a function that <says> things in a <<tone>>

Function sayThings(tone, ...things){
    return('In a ${tone} tone I say, "${things.join(" ")}"');
}

console.log(sayThings("excited", "Happy", "Friday!"));
