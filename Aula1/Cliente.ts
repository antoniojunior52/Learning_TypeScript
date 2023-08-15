import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa{
    private email: string;


    public setEmail(email: string) {
        this.email = email;
    }

    public getEmail() {
        return this.email;
    }

    constructor(nome:string, senha:string, telefone:string, email:string){

        super(nome, senha, telefone);
        this.email = email;
    }
}




