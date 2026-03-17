// let x:number = 10

// let nome:string = "Jezabel"

// let vetor:number[] = [1,2,3,4,5]

// let nomes:string[] = ["Hii~","Hello!"]
// console.log(nomes)

// //Teste

// // let bol:boolean = true

// // bol = false

// // const variavel:any = "oi"

// // const a:undefined = undefined;

// // const obj:{id:number;nome:string;idade:number} ={
// //     id:1, 
// //     nome:"Kesia",
// //     idade:18
// // }

// // obj.nome = "Souza"

// const x1 = 10

// const vetor1: 
// number[] = [0,1,2,3,4]
// vetor1[0] = 10

// // vetor1 = [0,1,2,3,4]

// let vetor2 = [0,1,2,3,4]
// vetor2 = [0,1,2,3,4]

// let aob: number|string = 10 ;
// aob= "julia"

// const obj:{id?:number;nome:string;idade:number} ={
    
//     nome:"Kesia",
//     idade:18
// }

// type Pessoa = {id?:number;nome:string;idade:number} 

// const p:Pessoa={
//     id:76,
//     nome:"Fulana",
//     idade:31
// }

// Funções em Javascript/typescript

//o que é função?
/**
 * um bloco de código que executa uma tarefa
 * (tarefa é uma sequência de comandos de código)
 * 
 * Benefício: Não repetir código
 */

// const f =  (variavel:number):number=>10
// const f3 = f(10)
// console.log("O valor de x é "+f3.toString())
// console.log(`O valor de x é ${f3}`)

// function SomaVetor(vetor:number[]) {
//   let soma = 0
//   for (let i = 0; i < vetor.length; i++)   {
//     const element = vetor[i];
//     soma = soma + element!
//   }
//  return soma
// }
// console.log(`O valor da soma do vetor é ${SomaVetor([1,2,3])}`)

/**
 * Exercício 01 - Calcular o quadrado de um número
 * Nome da função - calcularQuadrado
 * Crie uma função que receba um número e retorne o seu valor elevado ao quadrado.
 * @param {number} a Número a ser calculado
 * @returns {number} Retorna o quadrado do número
 * @example
 * calcularQuadrado(2) // 4
 * calcularQuadrado(-3) // 9
 */

//Início do seu código
// function calcularQuadrado(a:number):number {
//   return a ** 2
// }
// console.log(calcularQuadrado(2))
// console.log(calcularQuadrado(-3))
//Fim do seu código

/**
 * Exercício 02 - Verificar se um número é positivo
 * Nome da função - ehPositivo
 * Crie uma função que retorne verdadeiro se o número for maior que zero e falso caso contrário.
 * @param {number} a Número a ser verificado
 * @returns {boolean} Retorna true para positivos e false para negativos ou zero
 * @example
 * ehPositivo(2) // true
 * ehPositivo(-3) // false
 */

// function ehPositivo(a: number): boolean {
//   return a > 0;
// }
// console.log(ehPositivo(2))
// console.log(ehPositivo(-3))
//Fim do seu código

/**
 * Exercício 03 - Calcular média de três números
 * Nome da função - calcularMedia
 * Crie uma função que receba três números e retorne a média aritmética entre eles.
 * @param {number} a Primeiro número
 * @param {number} b Segundo número
 * @param {number} c Terceiro número
 * @returns {number} Retorna a média dos três números
 * @example
 * calcularMedia(2, 4, 6) // 4
 * calcularMedia(10, 20, 30) // 20
 */

//Início do seu código
// function calcularMedia(a:number, b:number, c:number):number {

//  return (a + b + c) / 3
// }
// console.log(calcularMedia(2, 4, 6))
// console.log(calcularMedia(10, 20, 30))


//Fim do seu código

/**
 * Exercício 04 - Verificar se um ano é bissexto
 * Nome da função - ehAnoBissexto
 * Crie uma função que verifique se um ano é bissexto (divisível por 4).
 * @param {number} ano Ano a ser verificado
 * @returns {boolean} Retorna true se for bissexto e false caso contrário
 * @example
 * ehAnoBissexto(2020) // true
 * ehAnoBissexto(2021) // false
 */
// % x === y (divisão)
//Início do seu código

// function ehAnoBissexto(ano:number):boolean {

// return ano % 4 === 0
 
// }
// console.log(ehAnoBissexto(2020))
// console.log(ehAnoBissexto(2021))
//Fim do seu código

/**
 * Exercício 05 - Calcular fatorial de um número
 * Nome da função - calcularFatorial
 * Crie uma função que calcule o fatorial de um número inteiro não negativo.
 * @param {number} num Número para cálculo do fatorial
 * @returns {number} Retorna o resultado do fatorial
 * @example
 * calcularFatorial(5) // 120
 * calcularFatorial(0) // 1
 */

//Início do seu código
// function calcularFatorial(num:number) {
//  if (num === 0 || num === 1) return 1;
  
//   let resultado: number = 1;
//   for (let i = num; i > 1; i--) {
//     resultado *= i;
// }
//   return resultado;
// }
// console.log(calcularFatorial(5))
// console.log(calcularFatorial(0))
//Fim do seu código

/**
 * Exercício 06 - Encontrar o menor número em um array
 * Nome da função - encontrarMenorNumero
 * Crie uma função que percorra um array de números e retorne o menor valor encontrado.
 * @param {number[]} vetor Array de números
 * @returns {number} Retorna o menor número presente no array
 * @example
 * encontrarMenorNumero([3, 1, 5, 2, 4]) // 1
 * encontrarMenorNumero([-3, -1, -5]) // -5
 */

//Início do seu código
// function encontrarMenorNumero(vetor: number[]): number {
  
//     let menor:number = vetor[0]!;
//     for (let i = 1; i < vetor.length; i++) {
//       if (vetor[i]! < menor) {
//         menor = vetor[i]!;
//       }
//     }
//     return menor;
//   }
// console.log(encontrarMenorNumero([3, 1, 5, 2, 4])); 
// console.log(encontrarMenorNumero([-3, -1, -5]));    

//Fim do seu código

/**
 * Exercício 07 - Calcular o maior entre dois números
 * Nome da função - calcularMaior
 * Crie uma função que receba dois números e retorne o maior deles.
 * @param {number} a Primeiro número
 * @param {number} b Segundo número
 * @returns {number} Retorna o maior dos dois valores
 * @example
 * calcularMaior(2, 3) // 3
 * calcularMaior(5, 1) // 5
 */

//Início do seu código
// function calcularMaior(a: number, b: number): number {
//   return a > b ? a : b;
// }
// console.log(calcularMaior(2, 3)); 
// console.log(calcularMaior(5, 1));
//Fim do seu código

/**
 * Exercício 08 - Concatenar duas strings
 * Nome da função - concatenarStrings
 * Crie uma função que receba duas strings e as retorne unidas em uma única string.
 * @param {string} s1 Primeira string
 * @param {string} s2 Segunda string
 * @returns {string} Retorna as duas strings concatenadas
 * @example
 * concatenarStrings('Olá, ', 'mundo!') // 'Olá, mundo!'
 * concatenarStrings('123', '456') // '123456'
 */

//Início do seu código
// function concatenarStrings(s1: string, s2: string): string {
//   return s1 + s2;
// }
// console.log(concatenarStrings('Olá, ', 'mundo!')); 
// console.log(concatenarStrings('123', '456')); 
//Fim do seu código

/**
 * Exercício 09 - Inverte a ordem dos caracteres de uma string
 * Nome da função - inverteString
 * Crie uma função que receba uma string e retorne essa string com os caracteres em ordem inversa.
 * @param {string} str A string que será invertida
 * @returns {string} Retorna a string com os caracteres em ordem inversa
 * @example
 * inverteString("hello") // "olleh"
 * inverteString("abcdef") // "fedcba"
 */ 

/* Início do seu código

function inverteString(str: string): string {
  let stringInv: string = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    stringInv += str[i];
  }
  
  return stringInv;
}

console.log(inverteString("hello"));  
console.log(inverteString("abcdef")); 
 Fim do seu código*/

/**
 * Exercício 10 - Contagem de vogais
 * Nome da função - contaVogais
 * Crie uma função que receba uma string e retorne a quantidade de vogais presentes na string.
 * @param {string} str A string que será analisada
 * @returns {number} Retorna a quantidade de vogais na string
 * @example
 * contaVogais("hello") // 2
 * contaVogais("abcdef") // 2
 */

/* Início do seu código
function contaVogais(str: string): number {
  const vogais: string = "aeiouAEIOU";
  let contador: number = 0;

  for (let caracter of str) {
    if (vogais.includes(caracter)) {
      contador++;
    }
  }

  return contador;
}

console.log(contaVogais("hello"));  
console.log(contaVogais("abcdef")); 

 Fim do seu código */


/**
 * Exercício 11 - divisivelPor7Ou9
 * Nome da função - divisivelPor7Ou9
 * Crie uma função que retorna um array com os números divisíveis por 7 ou por 9 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 7 ou por 9 no intervalo
 * @example
 * divisivelPor7Ou9(1, 50) // [7, 9, 14, 18, 21, 27, 28, 35, 36, 42, 45, 49]
 * divisivelPor7Ou9(7, 70) // [7, 9, 14, 18, 21, 27, 28, 35, 36, 42, 45, 49, 54, 56, 63, 70]
 */

//Início do seu código
// function divisivelPor7Ou9(min: number, max: number): number[] {
//   const resultado: number[] = [];

//   for (let i = min; i <= max; i++) {
   
//     if (i % 7 === 0 || i % 9 === 0) {
//       resultado.push(i);
//     }
//   }
//   return resultado;
// }
// console.log(divisivelPor7Ou9(1, 50)); 
// console.log(divisivelPor7Ou9(7, 70)); 
//Fim do seu código

/**
 * Exercício 12 - Contagem de consoantes
 * Nome da função - contaConsoantes
 * Crie uma função que receba uma string e retorne a quantidade de consoantes presentes na string.
 * @param {string} str A string que será analisada
 * @returns {number} Retorna a quantidade de consoantes na string
 * @example
 * contaConsoantes("hello") // 3
 * contaConsoantes("abcdef") // 4
 */

// Início do seu código
// function contaConsoantes(str: string): number {
//   const vogais: string = "aeiouAEIOU";
//   let contador: number = 0;

//   for (let caractere of str) {
//     if (/[a-zA-Z]/.test(caractere) && !vogais.includes(caractere)) {
//       contador++;
//     }
//   }

//   return contador;
// }
// console.log(contaConsoantes("hello"));  
// console.log(contaConsoantes("abcdef")); 

// Fim do seu código

/**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */ 

//Início do seu código

// function criaNovoVetor(vetor: number[], valor1: number, valor2: number): number[] {
//   return [...vetor, valor1, valor2];
// }

// console.log(criaNovoVetor([1, 2, 3], 4, 5)); 
// console.log(criaNovoVetor([1, 2, 3], 0, 0));

//Fim do seu código

/**
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código


//Fim do seu código

// console.log("Início da execução do código")
// //async function funcao(){
// const funcao = async () => {
//     const prom =
//         new Promise<string>((resolve, reject) => {
//             setTimeout(function handle() { //setTimeout é um cronomêtro
//                 reject("Executei a função")
//             }, 5000) // 5000, milisegundos,5 segundos
//         })
//     return prom
// }
// try { //tente
//     const resultado = await funcao()
//     console.log(resultado)
// }
// catch(erro){ //se não der certo
//     console.log("Minha mensagem de erro:"+erro)
// }

// console.log("Fim da execução do código")


// Math.random()>=0.5;{

// }


const vetor = [1,2,3,4,5,6,7]
//  function encontrarVetor(num:number){
// if (num===3){
//   return true
// } 
// else{
//   return false
// }
// } //ou return num===3 true

// console.log(vetor.find((num:number)=>num==3))
// console.log(vetor.filter((num:number)=>num>=3))

// function transforma(x:number){
//   return x**2
// }
// const r = vetor.map(transforma)
// console.log(r)
const vetor2 = vetor //muda o vetor principal
const vetor3 = [...vetor] // cria um novo vetor com base no primeiro vetor, uma cópia com os []. os "..." desconstroi o vetor
vetor2[0] = 10
vetor3[1] = 10
console.log(vetor)

const [p1,p2,...rest] = vetor3
console.log(p1,p2,rest)