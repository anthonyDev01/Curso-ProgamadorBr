function media(n1, n2){
    var notas = [n1 , n2]
    var media = (notas[0] + notas[1]) / 2
    // console.log(mediana);

    return media
}

var res1 = media(7, 9)
var m = media
var res2 = m(9 , 8)

console.log(res1)
console.log(res2);

// function anonima + arrow function

var media2 = (n1, n2) =>{
    return (n1 + n2) / 2
}

console.log(media2(10, 10));