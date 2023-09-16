/*
Instruções
Usando a linguagem JavaScript, desenvolva uma classe chamada Pessoa. Ela
precisa possuir, pelo menos, dois objetos. Essa classe servirá como base para a classe
Funcionário, a qual vai herdar os atributos e métodos da Pessoa. Além disso, inclua
os atributos adicionais cargo e salário na classe Pessoa.
Trabalhe esse código em seu IDE ou no Bloco de Notas, e compartilhe o link no
campo ao lado para que outros desenvolvedores possam analisá-lo.
*/

class Pessoa{
    constructor(nome, idade, salario, cargo){
        this.nome = nome;
        this.idade = idade;
        //this.ocupacao = 'desempregado';
        this.cargo = cargo;
        this.salario = salario;
    }
    saudacao() {
        console.log('ola ',this.nome);
}   saudacaoIdade() {
        console.log('sua idade é:  ',this.idade);
}
get nomePessoa(){
    return this.nome;
}
set nomePessoa(x){
    this.nome = x;
}
}
class Funcionario extends Pessoa{
    constructor(nome){
        super(nome);
        this.cargo = 'estudante';
        this.matricula = 2323;
    }
    get matriculaAluno(){
        return this.nome;
    }
    set matriculaAluno(matricula){
        this.matricula = matricula;
    }
    saudacaoOcupacao() {
        console.log('seu cargo é:  ',this.cargo);
}
}

let pessoa1 = new Pessoa("José",45);
console.log(pessoa1.nome);
pessoa1.saudacao();
pessoa1.saudacaoIdade();
let pessoa2 = new Pessoa("Maria",78);
console.log(pessoa2.nome);
pessoa2.saudacao();
pessoa2.saudacaoIdade();


let funcionario1 = new Funcionario();
funcionario1.nome = 'paula'
funcionario1.cargo = 'secretaria';
funcionario1.idade = 34;
funcionario1.salario = 3000;
console.log(funcionario1);
funcionario1.saudacao();
funcionario1.saudacaoOcupacao();



/*
let pessoa1 = new Pessoa('jose');
console.log(pessoa1.nome);
pessoa1.saudacao();
let aluno1  = new Aluno('paula');
console.log(aluno1.nome);
aluno1.saudacao();


/*
const pessoa1 = new Pessoa('joao',30);
console.log(pessoa1.nome);
//const pessoa2 = new Pessoa('ana',33);
pessoa1.nomePessoa = 'Maria';

console.log(pessoa1.nome);
pessoa1.saudacao();
*/