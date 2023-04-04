/*let calc = {

    soma: (a, b) =>{
        return a + b;
    },

    mult: (a, b) =>{
        return a * b;
    }


}*/


//module.exports = calc;

//outra meneira de usar o module.exports ja que ele é um objeto
module.exports.soma = soma = (a, b) => {return a + b}
module.exports.mult = mult = (a,b) => {return a * b};
module.exports.sub = sub = (a,b) => {return a - b};
module.exports.div = div = (a,b) => {return a / b};
