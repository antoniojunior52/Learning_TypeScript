import { Pessoa } from "./Pessoa";
export class Funcionario extends Pessoa{
    private cargo: string;


    public setCargo(cargo: string) {
        this.cargo = cargo;
    }

    public getCargo() {
        return this.cargo;
    }

    constructor(nome:string, senha:string, telefone:string, cargo:string){

        super(nome, senha, telefone);
        this.cargo = cargo;
    }
}



