// Default
function add(x, y = 0) {
    return x + y;
}
console.log("Default: ");
console.log(add(1));
console.log(add(1, 2));