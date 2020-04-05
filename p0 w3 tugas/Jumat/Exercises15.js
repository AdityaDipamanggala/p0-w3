function groupAnimals(animals) {
    var hurufAwal = '';
    var count = 0
    var temp
    for (var a = 0 ; a <= animals.length-1 ; a++){
        for (var b = 0 ; b <= animals.length-1 ; b++){
            if (animals[b] > animals[b+1]) {
                temp = animals[b]
                animals[b] = animals[b+1]
                animals[b+1] = temp
            }
        }
    }
    for (var i = 0 ; i <= animals.length-1 ; i ++) {
        var check = animals[i][0]
        if (hurufAwal !== check) {
            hurufAwal = check;
            count ++
        }
    }
    var kurung = []
    for (var c= 0 ; c <= count-1 ; c++) {
        kurung.push([])
    }
    var index = 0
    var hurufAwal2 = ''
    for (var e = 0 ; e <= animals.length-1 ; e++) {
        var check = animals[e][0]
        if (e === 0) {
            kurung[index].push(animals[e])
            hurufAwal2 = check
        }
        else if (hurufAwal2 === check){
            kurung[index].push(animals[e])
        }
        else if (hurufAwal2 !== check){
            hurufAwal2 = check
            index ++
            kurung[index].push(animals[e])
        }
    }
    return kurung
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

