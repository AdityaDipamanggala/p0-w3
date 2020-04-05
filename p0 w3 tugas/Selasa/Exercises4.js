var array = ['0001', "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2 (array) {
    array.splice (1, 4, 'Roman Alamsyah Elsharawy'
    , 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 
    'SMA International Metro')
   
    var tanggal = array[3].split('/')
   
    var bulan = tanggal[1]
   
    switch (bulan){
        case '01': 
        bulan = 'Januari';
        break ;
        case '02': 
        bulan = 'Februari';
        break ;
        case '03': 
        bulan = 'Maret';
        break ;
        case '04': 
        bulan = 'April';
        break ;
        case '05': 
        bulan = 'Mei';
        break ;
        case '06': 
        bulan = 'Juni';
        break ;
        case '07': 
        bulan = 'Juli';
        break ;
        case '08': 
        bulan = 'Agustus';
        break ;
        case '09': 
        bulan = 'September';
        break ;
        case '10': 
        bulan = 'Oktober';
        break ;
        case '11': 
        bulan = 'November';
        break ;
        case '12': 
        bulan = 'Desember';
        break ;
    }
    var intTanggal = []
    for (var i = 0; i <= tanggal.length - 1; i++) {
        var intTemporary = Number(tanggal[i]);
        intTanggal.push(intTemporary); 
    }
    intTanggal.sort()
    
    var a = tanggal.join('-')

    var b = array[1].slice(0, 14)

    return array + '\n' + bulan + '\n' + intTanggal 
    + '\n' + a + '\n' + b
    
    
}

console.log(dataHandling2(array))

