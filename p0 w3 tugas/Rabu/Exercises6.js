function angkaPalindrome(num) {
   
    // var nextNum = num + 1;
    
    var palindrome = false;
   
    while (palindrome === false){

        var str = String(num);

        var strTerbalik = '';
        
        var i = str.length-1
        
        for (i; 0 <= i ; i--){
            strTerbalik += str[i]
        }

        if(strTerbalik.length <= 1){
            palindrome = true;
            return num + 1;
        }
   
        else if (strTerbalik === str) {
            palindrome = true;
            return num;
        }
        else {
            num ++
        }
    }
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001


