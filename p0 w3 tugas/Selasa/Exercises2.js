function balikString (str) {
   var panjangStr = str.length - 1 ;
   var terbalikStr = '';
   for(panjangStr ; 0 <= panjangStr ; panjangStr-- ){terbalikStr += str[panjangStr]}
    return terbalikStr
}

console.log(balikString('babibubebo'))