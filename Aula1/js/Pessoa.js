"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    getTelefone() {
        return this.telefone;
    }
    setSenha(senha) {
        this.senha = senha;
    }
    getSenha() {
        return this.senha;
    }
    constructor(nome, senha, telefone) {
        this.nome = "";
        this.telefone = "";
        this.senha = "";
        this.nome = nome;
        this.senha = senha;
        this.telefone = telefone;
    }
}
exports.Pessoa = Pessoa;
