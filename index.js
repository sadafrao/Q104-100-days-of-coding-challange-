// Q104
//  this is a function create a hexadecimal  color code
function hexColorCode(string) {
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    return color;
}
console.log(hexColorCode("red"));
