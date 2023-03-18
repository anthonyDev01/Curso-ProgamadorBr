let tela = document.getElementById("tela");
let context = tela.getContext("2d");

/*       CANVAS LINHA       */
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(500, 0);
// context.strokeStyle = "blue"
// context.lineWidth = 5;
// context.stroke();

/*       CANVAS RETÂGULO       */

/*      ESTILO PREENCHIDO      */
// context.fillStyle = "blue";
// context.fillRect(10, 10, 100, 200);

/*      ESTILO BORDA           */
// context.strokeStyle = "red";
// context.strokeRect(10, 10, 100, 200);

/*     ESTILO BORDA E PREENCHIMENTO  */
// context.rect(10, 10, 100, 200);
// context.fillStyle = "blue";
// context.strokeStyle = "red";
// context.lineWidth = 5;

// context.fill();
// context.stroke();

/*LIMPA UMA PARTE DA TELA */
// context.clearRect(20, 20, 30, 30);

/*  INICIO E FIM DO CAMINHO(PATH)  */

// context.beginPath();

// context.strokeStyle = "red";
// context.moveTo(0, 0);
// context.lineWidth = 3;
// context.lineTo(400, 300);
// context.stroke();

// context.beginPath();
// context.strokeStyle = "blue";
// context.fillStyle = "green";
// context.lineWidth = 3;
// context.moveTo(300, 0);
// context.lineTo(0, 400);
// context.lineTo(400, 20);

// context.closePath();
// context.fill();
// context.stroke();

/*      CANVAS CICULOS     */

// let x = 250;
// let y = 250;
// let raio = 100;
// let inicio = 0;
// let fim = 2 * Math.PI;

// context.beginPath();
// context.fillStyle = "blue";

// context.arc(x, y, raio, inicio, fim);
// context.fill();

/*     CANVAS ANIMAÇÃO     */
// let circle = {
//     x : 250,
//     y : 250,
//     raio : 100,
//     inicio : 0,
//     fim : 0,
// }



// function drawCircle(c){
//     context.beginPath();
//     context.rect(0, 0, 500, 500);
//     context.fillStyle = "bisque";
//     context.fill()

//     context.beginPath();
//     context.fillStyle = "blue";
//     context.arc(c.x, c.y, c.raio, c.inicio, c.fim);
//     context.fill();
// }

// setInterval(function(){

//     if(circle.fim < 2 * Math.PI){
//         circle.fim += 0.3;
//         circle.x += 3
//     }
    
//     drawCircle(circle);


// }, 100)

/*    CANVAS IMAGEM    */
let img = new Image();
img.src = "./imagens/usoop.png";
img.onload = desenharImg;

function desenharImg(){
    context.drawImage(img, 20, 20);
}