let express = require("express");
let app = express();
const port = 3000;

app.get('/',function(req,res){
    res.send('ROTA GET');
});

app.get('/exercicio1', function (req,res){
    let param1 = parseInt(req.query.anoAtual);
    let param2 = parseInt(req.query.anoNascimento);
    let idade = parseInt(param1) - parseInt(param2);
    res.send(`A sua idade é ${idade} e seu nome é ${req.query.nome}`);
});

app.get('/exercicio2', function (req,res){
    let numero = parseInt(req.query.numero);
    let resultado = numero;
    for (var i = 1; i < numero; i++) {
        resultado *= i;
    }
    res.send(`O número fatorial de ${numero} é: ${resultado}`);
});

app.get('/exercicio3', function (req,res){
    let salario = parseInt(req.query.salario);
    let percentual = 0;
    let aumento = 0;
    let novoSalario = 0;
    if(salario <= 250) {
        percentual = 20;
        aumento = salario * (percentual/100);
        novoSalario = salario + aumento;
    }
    else if(salario > 250 && salario < 600) {
        percentual = 15;
        aumento = salario * (percentual/100);
        novoSalario = salario + aumento;
    }
    else if(salario > 600 && salario < 1500) {
        percentual = 10;
        aumento = salario * (percentual/100);
        novoSalario = salario + aumento;
    }
    else if(salario > 1500) {
        percentual = 5;
        aumento = salario * (percentual/100);
        novoSalario = salario + aumento;
    }
    res.send(`O salário antes do reajuste é: ${salario}; o percentual de aumento aplicado é: ${percentual}%
    O valor do aumento é: ${aumento} e o novo salário, após o aumento é: ${novoSalario}`);
});

app.get('/exercicio4', function (req,res){
    let numero = parseInt(req.query.numero);
    for (var i = 1; i < numero; i += 2) {
        console.log(i)
    }
});

app.get('/exercicio5', function (req,res){
    let numero = parseInt(req.query.numero);
    for (var i = 1; i < numero; i += 2) {
        console.log(i)
    }
});


app.get('/exercicio6', function (req,res){
    let hora = parseInt(req.query.hora);
    let minutos = parseInt(req.query.minutos);
    horaMinutos = hora * 60;
    totalMinutos = horaMinutos + minutos;
    segundos = totalMinutos * 60;
    res.send(`A hora convertida em minutos é: ${horaMinutos} o total de minutos é: ${totalMinutos} e o total de segundos é: ${segundos}.`);
});

app.get('/exercicio7', function (req,res){
    let numero = parseInt(req.query.numero);
    let tabuada1 = numero * 1
    let tabuada2 = numero * 2
    let tabuada3 = numero * 3
    let tabuada4 = numero * 4
    let tabuada5 = numero * 5
    let tabuada6 = numero * 6
    let tabuada7 = numero * 7
    let tabuada8 = numero * 8
    let tabuada9 = numero * 9
    let tabuada10 = numero * 10
    res.send(`${numero} * 1 = ${tabuada1}
    ${numero} * 2 = ${tabuada2}
    ${numero} * 3 = ${tabuada3}
    ${numero} * 4 = ${tabuada4}
    ${numero} * 5 = ${tabuada5}
    ${numero} * 6 = ${tabuada6}
    ${numero} * 7 = ${tabuada7}
    ${numero} * 8 = ${tabuada8}
    ${numero} * 9 = ${tabuada9}
    ${numero} * 10 = ${tabuada10}`);
});



app.listen(3000,function(){
    console.log(`application running in port: ${port}`);
}); 