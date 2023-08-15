
    export class Pessoa{
        private nome : string = "";
        private telefone : string = "";
        private senha : string = "";


        public setNome(nome:string){
            this.nome = nome;
        }

        public getNome(){
            return this.nome;
        }

        public setTelefone(telefone:string){
            this.telefone = telefone;
        }

        public getTelefone(){
            return this.telefone;
        }

        public setSenha(senha:string){
            this.senha = senha;
        }

        public getSenha(){
            return this.senha;
        }

        constructor(nome:string, senha:string,telefone:string){
            this.nome = nome;
            this.senha = senha;
            this.telefone = telefone;
        }
    }
