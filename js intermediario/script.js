function ImgHide(){
    let imagem = document.getElementsByTagName("img")[0]

    let btm = document.getElementById("botao")

    if(imagem.style.display === "none"){
        imagem.style.display = "block"
        btm.innerText = "esconder"
    }else{
        imagem.style.display = "none"
        btm.innerText = "mostrar"
    }
}

function onMove(elemento){
    elemento.style.backgroundColor = "cadetblue"
}

function onOut(elemento){
    elemento.style.backgroundColor = "royalblue"
}