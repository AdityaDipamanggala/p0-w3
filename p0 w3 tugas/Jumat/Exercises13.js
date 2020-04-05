function targetTerdekat(arr) {
    var posisiX = [];
    var posisiO = [];
    var jarak = []
    for (var i = 0 ; i <= arr.length-1 ; i++) {
        if (arr[i] === 'x') {
            posisiX.push(i)
        }
        else if (arr[i] === 'o') {
            posisiO.push(i)
        }
    }
    for (var k = 0 ; k <= posisiX.length-1 ; k++) {
        for ( var j = 0 ; j <= posisiO.length-1 ; j++) {
            jarak.push(Math.abs(posisiX[k]-posisiO[j]))
        }
    }
    var temp
   
    for (var i = 0 ; i <= jarak.length-1 ; i ++) {
        for ( var j = 0 ; j <= jarak.length-1 ; j ++) {
            if (jarak[j] > jarak[j+1]) {
                    temp = jarak[j]
                    jarak[j] = jarak[j+1]
                    jarak[j+1] = temp
                }
            }
    }
   if (jarak[0] === undefined){return 0}
   else {return jarak[0]} 
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2


