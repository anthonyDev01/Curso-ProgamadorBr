const sharp = require("sharp"); //importando o modulo sharp que esta sendo utilizado para redimensionar a imagem
const compress_images = require("compress-images");//importando o modulo que ta sendo utilizado pra comprimir a imagem
const fs = require("fs");

let path = process.argv[2];
let width = Number(process.argv[3]);

const resize = (inputPath, outputPath, width) =>{

    //sharp recebe o nome do arquivo, o metodo resize recebe um objeto com altura e largura e o metodo toFile
    //recebe o endereco/saida da imagem e tambem recebe uma calback
   sharp(inputPath).resize({width: width}).toFile(outputPath, (err) =>{
        if(err)
            throw err
        else{
            console.log("imagem redimensionada com sucesso");
            compressImage(outputPath, "./compress/"); //recebe a entrada e a saida da imgem
        }
        
            
    })

}

//metodo que comprime a imgem
const compressImage = (pathInput,  outputPath) =>{
    compress_images(pathInput, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
    function (error, completed, statistic) {
        console.log("-------------");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("-------------");

        //apagando que so foi redimensionada pra salvar somente a imgem q foi redeimensionada e comprimida
        fs.unlink(pathInput, (err)=>{
            if(err)
                console.log(err);
            else 
                console.log(pathInput, " apagado");
        })
        
    }
    );  

    

};

resize(path, "./temp/output_resize.jpg" ,width);
