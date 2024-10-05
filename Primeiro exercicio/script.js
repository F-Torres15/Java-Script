var a 
for(a=1; a <=10; a++){
    document.write(a+ "<br>")
}

var numero =2
numero = Number(prompt("Digite um número"))
if(numero%2 ==1){
document.write("Numero impar")
}else{
 document.write("Numero par")

}

var dia

dia = Number(prompt("Escolha do 1 ao 7 para denominar o dia da semana"))

switch(dia){
    case 1:
        document.write("Dia da semana é Domingo")
        break
        case 2:
            document.write("Dia da semana é Segunda-feira")
            break
    case 3:
        document.write("Dia da semana é Terça-feira")
        break
        case 4:
            document.write("Dia da semana é Quarta-feira") 
            break
    case 5:
        document.write("Dia da semana é Quinta-feira")
        break
    case 6:
        document.write("Dia da semana é Sexta-feira")
        break
    case 7:
        document.write("Dia da semana é Sabado")          

            
}

var mes

mes= prompt("Digite um nome referente ao mês")

switch(mes){
    case "Janeiro":
        document.write(1)
        break

        case "Fevereiro":
        document.write(2)
        break

        case "Março": 
            document.write(3)
            break

    case "Abril" :
    document.write(4)
   break

  case "Maio":
    document.write(5)
    break

case "Junho":
document.write(6)
break
case "Julho" :
document.write(7)
break
case "Agosto":
document.write(8)
break
case "Setembro" :
document.write(9)
break
case "Outubro" :
document.write(10)
break
case "Novembro" :
document.write(11)
break
case "Dezembro":
document.write(12)
break

}

var horas,salario
horas= prompt("Quantas horas você trabalhou essa semana?")

if(horas <=40){
    salario = horas *10
}
else if (horas <=60){
    salario =400 (horas -40) *15
} else {
    salario =400 + 20*20 (horas -60) *25
}

document.write("Salário semanal é de R$"+salario)

// var real
// valor = prompt("Digite um valor em real para ser convertido em dolar:")
//  valor =valor * 0.18
// document.write(valor)