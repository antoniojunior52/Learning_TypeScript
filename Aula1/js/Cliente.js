"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./Pessoa");
class Cliente extends Pessoa_1.Pessoa {
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    constructor(nome, senha, telefone, email) {
        super(nome, senha, telefone);
        this.email = email;
    }
}
exports.Cliente = Cliente;
