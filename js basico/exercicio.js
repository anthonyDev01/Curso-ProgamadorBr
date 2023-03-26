let gasolina = 8.9
let alcool = 6.20

function vantajo(gasolina, alcool){
    if (alcool <= (gasolina * 70)/100){
        return "compensa"
    }else{
        return "melhor gasolina"
    }

}



console.log(vantajo(gasolina, alcool));