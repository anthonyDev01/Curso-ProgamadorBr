const Person = require("./class/Person");
const Alumn = require("./class/Alumn");

let pedro = new Person("Pedro", 20);
pedro.getGreetings();

let anthony = new Alumn("Anthony", 18, "22");
anthony.getGreetings();