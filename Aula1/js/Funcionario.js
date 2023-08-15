"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoa_1 = require("./Pessoa");
class Funcionario extends Pessoa_1.Pessoa {
    setCargo(cargo) {
        this.cargo = cargo;
    }
    getCargo() {
        return this.cargo;
    }
    constructor(nome, senha, telefone, cargo) {
        super(nome, senha, telefone);
        this.cargo = cargo;
    }
}
exports.Funcionario = Funcionario;
