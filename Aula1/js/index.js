"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = require("./Funcionario");
const Cliente_1 = require("./Cliente");
const user = new Cliente_1.Cliente("Junior", "12345", "16988079168", "antoniojunior@gmail.com");
console.log(user);
const func = new Funcionario_1.Funcionario("Bruno", "678910", "16993559811", "Programador");
console.log(func);
