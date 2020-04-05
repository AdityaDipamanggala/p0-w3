function tentukanDeretAritmatika(arr) {
    var beda = arr[1] - arr[0]
    var kumpulanBeda = []
    var count = 0;
    for (var i = 0 ; i <= arr.length-1 ; i++) {
        var bedaDeret = arr[i] - arr[i-1]
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
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false