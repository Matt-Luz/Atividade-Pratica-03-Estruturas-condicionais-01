// Atividade 03 - 01

/* 
    Desenvolva um algoritmo que faça o cálculo do índice de massa
    corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
    que digite sua altura, em seguida solicitar que digite seu peso e que
    lhe exiba o status.

    O status vai variar da seguinte forma:

    a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
    “Você está abaixo da faixa de peso ideal”;

    b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
    “Você está acima da faixa de peso ideal”;

    c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
    24,99, o status a ser mostrado será “Você está dentro da faixa
    de peso ideal”.

    Problemas/Variaveis

    const peso = ;
    const altura = ;
    let status = '';
    calcular IMC = peso / (altura * altura);

    if (IMC < 18.5) {
        status = 'Você está abaixo da faixa de peso ideal';
    } else if (IMC >= 18.5 && IMC <= 24.99) {
        status = 'Você está dentro da faixa de peso ideal';
    } else {
        status = 'Você está acima da faixa de peso'
    }
*/

const peso = 120;
const altura = 1.85;
let status = '';
const imc = peso/(altura*altura);

if (imc < 18.5) {
    status = 'Você está abaixo da faixa de peso ideal';
} else if(imc >= 18.5 && imc <= 24.99) {
    status = 'Você está dentro da faixa de peso ideal';
} else {
     status = 'Você está acima da faixa de peso ideal';
}

console.log(imc);
console.log(status);



// Atividade 03 - 02

/* 

    Escreva um algoritmo que solicite 2 números e uma operação
    matemática. O algoritmo deve realizar o cálculo com os 2 números
    digitados conforme a operação informada.

    Problemas/Variaveis

    let num1 = ;
    let num2 = ;
    const operacao = '*';

*/

let num1 = 7;
let num2 = 12;

const operacao = '';

if(operacao == '*') {
    console.log(num1 * num2);
} else if (operacao == '/') {
    console.log(num1 / num2);
} else if(operacao == '+') {
    console.log(num1 + num2);
} else if(operacao == '-') {
    console.log(num1 - num2);
} else {
    console.log('Operação inválida');
}



// Atividade 03 - 03

/*

    Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
    a conta do usuário deve ser criada já com um saldo positivo. O
    usuário precisa informar a quantidade de dinheiro que deseja
    retirar, esse valor deve ser um número positivo, múltiplo de 5 e
    menor do que o saldo. Cada saque eletrônico cobra uma taxa de
    R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
    certo com o saque, e se o usuário informar um valor maior que o
    saldo deve ser informado ao usuário que o mesmo não tem dinheiro
    suficiente em conta para realizar o saque.
    OBS: Na verificação se o valor do saque é maior que o saldo deve
    ser considerado e também contabilizado o valor da taxa a ser
    cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
    da taxa do saque não pode ser maior que o saldo disponível.

    Problemas/Variaveis

    let saldo = ;
    let retirada = ; (Valor multiplo de 5 e menor que o saldo)
    let valorPorSaque = 4.50;
    let saldoContaFinal = saldo - retirada - valorPorSaque;


*/

let saldo = 5000;
let retirada = 1275;
let taxa = 4.50;
let saldoContaFinal = saldo - (retirada + taxa);

if((retirada + taxa) > saldo) {
    console.log('Você não possui saldo suficente para essa operação.');
} else if (retirada <= 0) {
    console.log('O valor de saque deve ser positivo');
} else if (retirada%5 != 0) {
    console.log('Este terminal possui apenas notas de R$ 5,00, R$ 10,00, R$ 20,00 e R$ 50,00');
} else {
    console.log(`Saque sendo processado. O valor atualizado do seu saldo é ${saldoContaFinal}`);
}



// Atividade 03 - 04

/*
    
    Faça um algoritmo que leia a idade e peso de um atleta e imprima
    a sua categoria, de acordo com a seguinte tabela:

    Idade Peso Categoria
    
    Até 12 anos - Infantil
    13 a 16 anos Até 40kg Juvenil leve
    Acima de 40kg Juvenil pesado
    17 a 24 anos Até 45kg Sênior leve
    Acima de 45kg até 60kg Sênior médio
    Acima de 60kg Sênior pesado
    Acima de 24 anos - Veterano    

    Problemas/Variaveis

    let idade = ;
    let peso = ;
    let categoria = ;

*/

const idade = 23;
const Peso = 61;


if(idade <= 12){
    console.log('Sua categoria é Infantil');
} else if(idade <= 16 && Peso <= 40) {
    console.log('Sua categoria é Juvenil Leve');
} else if(idade <= 16 && Peso > 40) {
    console.log('Sua categoria é Juvenil Pesado');
} else if(idade <= 24 && Peso <= 45) {
    console.log('Sua categoria é Sênior Leve');
} else if(idade <= 24 && Peso <= 60) {
    console.log('Sua categoria é Sênior Médio');
} else if(idade <= 24 && Peso > 60) {
    console.log('Sua categoria é Sênior Pesado');
} else{
    console.log('Sua categoria é Veterano');
}



// Atividade 03 - 05

/*  

    Escreva um programa que pergunte a velocidade de um carro. Caso
    ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
    multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
    km acima da velocidade permitida.

    Problemas/Variaveis

    const velocCar = 90
    const velocMax = 80
    const multa = 5
*/

const velocCar = 97;
const velocMax = 80;
const multa = (velocCar - velocMax) * 5;

if(velocCar <= velocMax) {
    console.log('Dentro da velocidade permitida.');
} else {
    console.log(`Você está acima de ${velocMax} km/h! O valor da sua multa é de R$ ${multa}`);
}


