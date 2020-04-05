function tentukanDeretGeometri(arr) {
    var beda = arr[1] / arr[0]
    var kumpulanBeda = []
    var count = 0;
    for (var i = 0 ; i <= arr.length-1 ; i++) {
        var bedaDeret = arr[i] / arr[i-1]
        kumpulanBeda.push(bedaDeret)
    }    
    for (var j = 1 ; j <= arr.length-1 ; j++) {
        if (kumpulanBeda[j] !== beda){
            count ++
        }
    }
    if(count !== 0) {
        return false
    }
    else{return true}
}
  
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false