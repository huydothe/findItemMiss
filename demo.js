function findItemMiss(data) {
    var arr = [];
    for (var i = 1; i <= 10; i++) {
        if (data.indexOf(i) == -1) {
            arr.push(i);
        }
    }
    return arr;
}
var result = findItemMiss([1, 2, 5, 6, 7, 10]);
console.log(result);
