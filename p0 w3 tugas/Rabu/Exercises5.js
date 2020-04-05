function palindrome(kata) { 
    var kataTerbalik = '';
    var i = kata.length-1 ;
    for (i; 0 <= i ; i--) {
        kataTerbalik += kata[i]
    }
    if (kataTerbalik === kata) {return true}
    else {return false} 
  }
  
  
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
