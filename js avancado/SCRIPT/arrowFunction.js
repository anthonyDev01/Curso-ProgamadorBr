let dobro = () => {console.log(this);};


// let dobro =  function(){
//     return 2 * this.x
// }

let numero = {
    x: 9,
    d: dobro
}


numero.d()
// console.log(numero.d());