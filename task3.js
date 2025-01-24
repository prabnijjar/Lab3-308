/*/
//calculate the volume of a cylinder
// defining the math so we can use it in the statements
function calc_cylinder_volume(diameter, height) {
    var pi = 3.14159;
    var radius = diameter / 2;
    var volume = pi * (radius * radius) * height;
    return volume;
  }
  // defining variables
  var diameter = 20; //example diameter
  
  var height = 30; // example height
  
  let volume = calc_cylinder_volume(diameter, height);
  
  // Processing info into statement
  console.log(
    `A cylinder with a diameter of ${diameter} meters and height of ${height} meters has the volume of ${volume.toFixed(
      2
    )} cubic meters.`
  );

  /*/

  function cylinderVolume (radius, height){
    let volCylinder = Math.PI*radius**2*height;
    return volCylinder;
  }

console.log(cylinderVolume(83, 45));
console.log(cylinderVolume(90, 80));
console.log(cylinderVolume(42, 67));
