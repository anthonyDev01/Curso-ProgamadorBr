class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getGreetings(){
        return this.#greetings() //aplicando conceito de encapsulamento
    }

    #greetings(){
        console.log("Olá, ", this.name);
    }
}

module.exports = Person;