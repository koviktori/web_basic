
Array.prototype.toCustomString = function() {
    return "[object Array]";

};
const arr = [1, 2, 3];
console.log(arr.toCustomString());
console.log(arr.toString());
