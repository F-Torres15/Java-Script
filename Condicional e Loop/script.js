// printar conteudo

// alert("Olá Mundo");
document.write("Olá mundo!") // mesma função do printf
console.log("Fernando") // exibir informação no console ou terminal

// DECLARAÇÃO DE VARIÁVEIS

//VAR , LET OU CONST 
/* 
VAR -> pode ser redrclarada e reatribuida
ex: var x= 20;
x=30;
var x =90;  redeclarei
*/
// console.log(x)

/*
LET -> Não pode ser redeclarada ,mas pode ser reatribuida
ex:
let y =90;
y =100;
// */
// console.log(y)

/*
CONST -> Não pode ser redeclarada e nem pode ser reatribuida
ex:
cons m= 78; 
m=90; não é possivel pois já foi declarada
 
//  */
// console.log(m)

// TIPOS DE DADOS NO JS

/*

NUMBER-STRING-BOOLEAN-UNDEINED-NULL

UNDEFINED -> É usado como uma variavel foi declarada.mas não foi inicializada


 */
console.log("TIPOS DE DADOS")

let num=90
let string="Hello"
let bool= true
let nulo= null
let undef

console.log(typeof num)
console.log(typeof string)
console.log(typeof bool)
console.log(typeof undef)

// ATRIBUIÇÃO DE VALORES 
console.log("ATRIBUIR VALOR")

let num1 =20
num1 += 40
console.log(num1)

//INCERMENTO E DECREMENTO

console.log("ENCREMENTO E DECREMENTO")

let w =20
console.log(w++) //21
console.log(w--) //19

// OPERADORES CONDICIONAIS

console.log("OPERADORES RELACIONAIS")

let num2 = 10
let num3 = 15
console.log(num2 == num3) // false
console.log(num2 != num3) // true
console.log(num2 === num3) // mesmo tipo ,mesmo valor FALSE 

//OPERADORES LOGICOS
console.log("OPERADORES LOGICOS")

console.log(!(num1=== num2)); // not
console.log((num1 != num2) && (num1 === num2)) //amd
console.log((num1 === num2) || (num1 != num2))// or

//ESTRUTURA CONDICIONAL
console.log("ESTRURURA CONDICIONAL")
if(num1 != num2){
    console.log("São diferentes")
}else{
    console.log("São iguais")
}

//OPERADOR TERMINAL
console.log("OPERADOR TERMINAL")

let n1=(num1 < num2) ? "SIM" : "NÃO"
console.log(n1)

// IF ELSE IF
console.log("IF ELSE IF")

if(num1 > num){
    console.log("Num1 é maior que Num2")
}else if (num1 < num2){
    console.log("Num1 é menor que Num2")
} else{
    console.log("Num1 é igual Num2")
}

//SWTICH

console.log("SWITCH")

let fruta ="uva"
switch(fruta){
    case "uva":
    console.log("É uma uva")
       break

    case "pera":
        console.log("É uma pera")
        break
    default:
            console.log("Procure uma fruta")
}

//WHILE
console.log("WHILE")

let i=1
while( i <10){
    console.log(i)
    i ++
}

// FOR

console.log("ESTRUTURA INTERATIVA FOR")
for(var a =1; i < 10; a++){
    console.log(i)
}

// DO WHILE

console.log("ESTRUTURA INTERATIVA: DO WHILE")

var a =1
do{
    console.log(i)
    i++
}while (i <10)






