/* Utilizando a estrutura "Switch case", solicite ao usuário e coloque no prompt a profissão. 
Caso "Programado" apresentar -> Você é um programador
Caso Advogado -> Você é um advogado
Caso Engenheiro -> Você é um engenheiro
Qualquer outra profissão -> Profissão não encontrada


let profissao = String(prompt(`Escola e digite uma das 3 profissões a seguir!`, `*Programador, *Advogado,*Engenheiro.`));

switch (profissao) {
    case 'Programador':
        document.write(`Você é um Programador!`);
        console.log(`Você é um Programador!`); break;
    case 'Advogado':
        document.write(`Você é um Advogado!`);
        console.log(`Você é um Advogado!`); break;
    case 'Engenheiro':
        document.write(`Você é um Engenheiro!`);
        console.log(`Você é um Engenheiro!`); break;
    default:
        document.write(`Profissão não encontrada!`);
        console.log(`Profissão não encontrada!`);
}

*/


// let contador = 1;

// // "While" --> Enquanto
// while(contador <= 5){
//     console.log(contador);
//     contador++; // "++" incrementar +1
// }


/* #DESAFIO: 

Utilizando a estrutura "While", solicite ao usuário que escolha um número de 0 a 10. Apresente a partir do número escolhido o somatório até 100 no console */


// let numContador = Number(prompt(`Escolha um número aleatório de 0 a 10`));

// while(numContador >= 0 ){
//     console.log(numContador);
//     numContador -= 5;
// }

// =====================================================

// #ESTRUTURA DO...WHILE

// let contador = 10;

// do{
//     console.log(contador);
//     contador--;

// }while (contador > 0 )



// Estabelece uma variável local
// for(let i = 0; i <= 5; i++){
//     console.log(i)
// }



// Utilizando o laço "for" escreva os numeros de 20 a 100.

// for(let i = 20; i <= 100; i++){
//     console.log(i);
// }


/* Escreva um programa em js que solicite um numero ao usuario e exiba todos dos numeros impares 

let numero = Number(prompt(`Digite um número:`));

console.log(`Números impares entre 1 e ` + numero +`:`);

for(let i = 1; i <= numero; i++){
    if(i % 2 !== 0){     // "%" --> resto da porcentagem
        console.log(i);    //Irá imprimir na tela apenas o numero ímpar
    }
}

*/


// #DESAFIO: Imprima os apenas os números pares digitado pelo usuário


let numUser = Number(prompt(`Digite um número aleatório !`));

console.log(`Os número pares entre 1 e ${numUser} são: `);

for(let i = 1; i <= numUser; i++){
    if(i % 2 !== 1){
        console.log(`os números pares são: ${i}`);
    }
}
