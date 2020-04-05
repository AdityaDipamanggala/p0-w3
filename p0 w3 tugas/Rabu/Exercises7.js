
function pasanganTerbesar(num) {
var strNum = String(num);
var index = strNum.length-1;
var angkaTerbesar = '';
var i ;
for ( i = 0 ; i <= index ; i++){ 
  var angkaTerbesarSementara = strNum[i] + strNum[i+1]
  if ( angkaTerbesarSementara >= angkaTerbesar ) { 
    angkaTerbesar = angkaTerbesarSementara
  }
}
return parseInt(angkaTerbesar)

 }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99

