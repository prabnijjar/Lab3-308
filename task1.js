/*/ km_to_miles.js
var kilometres = 10; // Example kilometers
var miles = kilometres * 0.621371; // divide the kilometres by yhis amount to see what it is in miles

// Processing info into statement 
console.log(`${kilometres} kilometers is equal to ${miles.toFixed(2)} miles.`);

/*/

function km_to_miles (kiloinput){
    let miles = kiloinput * 0.621371;
    return miles;
}

console.log(km_to_miles(7));
console.log(km_to_miles(3));
console.log(km_to_miles(9));
