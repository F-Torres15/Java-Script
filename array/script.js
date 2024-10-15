// Array -> é uma estrututa de dados qur amamzena um conjunto de valores


// let colors =[ 'Pink', 'Red', 'Green', 'Black']
// document.write(colors)

// acessar array utilizando um item numerico

// document.write( "<br> " + colors[3])

// LENGTH quantos itens existem no array

// document.write( "<br>" + colors.length)

// MANIPULAÇÃO DE ARRAY

// const frutas =['Maçã', 'Uva','Pera', 'Melão']
// document.write("<br>" + frutas)

// add um elemento no final

// document.write(frutas.push("Abacate"))
// document.write("<br>" +frutas)

// add um elemento no inicio do array

// document.write(frutas.unshift("Banana"))
// document.write("<br>" + frutas)

// Remover o primeiro elemento do array

// document.write(frutas.shift())
// document.write( " <br>" + frutas)

// REMOVER ITENS ESPECIFICOS

// frutas.splice(2,2)
// document.write("<br>" +frutas)

// separar itens do array
// document.write( "<br>" +frutas.join(' -') + "<br>" )
// document.write(frutas.map(String).join(' - '))

// interação sobre arrays

// usando um loop for
// for(let i =0 ; i < frutas.length; i++) {
//     document.write(frutas[i] )

// }

//forEach

// let carros =["Hb20", "Cross Fox", "Onix", "Prisma"]
// carros.forEach((valor, indice) => {
//     document.write(`Indice: ${indice} - Valor : ${valor} </br>`)
    
// })

// let vetor = [10,20,30]
// function inverterArray(vetor){
//     for(let i =  vetor.length -1; i >=0; i--){
//     document.write(vetor[i])
//     }
   
// }
// inverterArray(vetor)

// let vetor = [15,30,60]
// function maiorNumero(vetor){
//     let maior =0
//     for(let i =0; i<vetor.length; i ++){
//         if(vetor[i] >= maior){
//             maior=vetor[i]
//         }
//     }
//     document.write(maior)
// }
// maiorNumero(vetor)


// let vetor=[1,2,5,5,9,15,15,15,17,15,5,18,15,15,18]
 
// function removerDuplicatas(vetor) {
//   for (let i = 0; i < vetor.length; i++) {
//     for (let j = i + 1; j < vetor.length; j++) {
//       if (vetor[i] == vetor[j]) {
//         vetor.splice(i, 1)
//         --i;
//       }
//     }
//   }
// }
// removerDuplicatas(vetor)
// document.write(vetor)





// let vetor =[20,20,10]


//     function somar(vetor){
//     let total = 0
//         for( let i=0; i< vetor.length; i++){
//             if (vetor[i] >= 2){
//                 total += vetor[i]
            
//         }
//         }
//         document.write("<br>" + total)
//     }
//         somar(vetor)
       


    
// numero = Number(prompt("Insira um número"))
// function multiplicador(numero){
//   let numero2 =Math.random(1,2)
//   document.write(numero*numero2)

// }
// multiplicador(numero)
    

let aluno={
  nome : 'Chico',
  cidade:'Conquista',
  olhos :['pretos','verde'],
  caracteristicas:{
    peso:80,
    alutura: 1.72
  },
  oi(){
    return'Estuda no Senai'
  }
}

let frase = `${aluno.nome}  mora em ${aluno.cidade} ,tem olhos ${aluno.olhos[0] } com peso de ${aluno.caracteristicas.peso}kg e ${aluno.oi()}`
document.write(frase)