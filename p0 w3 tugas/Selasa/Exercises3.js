var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling (input) {
    var data = ''
    for (i = 0 ; i <= input.length-1 ; i++ ) {
        var ID = input [i][0];
        var nama = input [i][1];
        var tempatLahir = input [i][2];
        var tanggalLahir = input [i][3];
        var hobi = input [i][4];
        data += 
        'Nomor ID: ' + ID + '\n'
        + 'Nama Lengkap: ' + nama + '\n'
        + 'TTL: ' + tempatLahir + ' ' + tanggalLahir + '\n'
        + 'Hobi: ' + hobi +'\n\n'
    }
    return data
}

console.log(dataHandling(input))