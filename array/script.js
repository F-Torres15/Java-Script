// Array -> é uma estrututa de dados qur amamzena um conjunto de valores


let colors =[ 'Pink', 'Red', 'Green', 'Black']
document.write(colors)

// acessar array utilizando um item numerico

document.write( "<br> " + colors[3])

// LENGTH quantos itens existem no array

document.write( "<br>" + colors.length)

// MANIPULAÇÃO DE ARRAY

const frutas =['Maçã', 'Uva','Pera', 'Melão']
document.write("<br>" + frutas)

// add um elemento no final

document.write(frutas.push("Abacate"))
document.write("<br>" +frutas)

// add um elemento no inicio do array

document.write(frutas.unshift("Banana"))
document.write("<br>" + frutas)

// Remover o primeiro elemento do array

document.write(frutas.shift())
document.write( " <br>" + frutas)

// REMOVER ITENS ESPECIFICOS

frutas.splice(2,2)
document.write("<br>" +frutas)

// separar itens do array
document.write( "<br>" +frutas.join(' -') + "<br>" )
// document.write(frutas.map(String).join(' - '))

// interação sobre arrays

// usando um loop for
// for(let i =0 ; i < frutas.length; i++) {
//     document.write(frutas[i] )

// }

//forEach

let carros =["Hb20", "Cross Fox", "Onix", "Prisma"]
carros.forEach((valor, indice) => {
    document.write(`Indice: ${indice} - Valor : ${valor} </br>`)
    
})