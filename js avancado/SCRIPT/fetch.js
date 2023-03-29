let url = "http://api.currencylayer.com/live?access_key=c8ad3acc139b233936668e216dd3c526&format=1"

function converter(){
    let input = document.getElementById("valor")
    let valor = input.value
    
    fetch(url)
        .then((res) =>{
            return res.json()
        })
        .then((data) =>{
            let rates = data.quotes.USDBRL
            let resultado = `${valor} dolares = ${valor * rates} em reais`
            document.getElementById("resultado").innerHTML = resultado


            console.log(valor * rates);
        })
}

