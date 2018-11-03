alert("Bem vindo(a) ao Banco da Republica!");

let idadeUsuario = Number(prompt("Qual a sua idade?"));
let rendaMensal = Number(prompt("Qual a sua renda mensal?"));
let valorEmprestimo = Number(prompt("Qual o valor do empréstimo desejado?"));

if (idadeUsuario < 25 || idadeUsuario > 65) {
    alert("RECUSADO! Você precisa ter entre 25 e 65 anos anos para solicitar o empréstimo.");
    }
    else if (rendaMensal < 1500) {
    alert("RECUSADO! Você precisa ter uma renda mensal de no mínimo R$1.500,00 para solicitar o empréstimo.");
    }
    else if (valorEmprestimo < 1000) {
    alert("RECUSADO! O mínimo valor a ser emprestado deve ser de R$1.000,00");
    }
    else if (valorEmprestimo > rendaUsuario * 5) {
    alert("RECUSADO! Seu empréstimo pode ser de no máximo cinco vezes o valor de sua renda mensal.");
    }
    else {
        alert("EMPRÉSTIMO APROVADO!");
    }

let emprestimoDeParcelas = prompt("Em quantas parcelas você gostaria de quitar o seu empréstimo?");
    
if (emprestimoDeParcelas <= 5) {
    alert("Seu empréstimo foi aprovado e parcelado em cinco vezes de " + valorEmprestimo * [(1 + 0.08)**emprestimoDeParcelas] + "R$");

}