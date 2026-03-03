let x:number = 10

let nome:string = "Jezabel"

let vetor:number[] = [1,2,3,4,5]

let nomes:string[] = ["Hii~","Hello!"]
console.log(nomes)

//Teste

// let bol:boolean = true

// bol = false

// const variavel:any = "oi"

// const a:undefined = undefined;

// const obj:{id:number;nome:string;idade:number} ={
//     id:1, 
//     nome:"Kesia",
//     idade:18
// }

// obj.nome = "Souza"

const x1 = 10

const vetor1: 
number[] = [0,1,2,3,4]
vetor1[0] = 10

// vetor1 = [0,1,2,3,4]

let vetor2 = [0,1,2,3,4]
vetor2 = [0,1,2,3,4]

let aob: number|string = 10 ;
aob= "julia"

const obj:{id?:number;nome:string;idade:number} ={
    
    nome:"Kesia",
    idade:18
}

type Pessoa = {id?:number;nome:string;idade:number} 

const p:Pessoa={
    id:76,
    nome:"Fulana",
    idade:31
}

// Funções em Javascript/typescript

//o que é função?
/**
 * um bloco de código que executa uma tarefa
 * (tarefa é uma sequência de comandos de código)
 * 
 * Benefício: Não repetir código
 */

const f =  (variavel:number):number=>10
const f3 = f(10)
console.log("O valor de x é "+f3.toString())
console.log(`O valor de x é ${f3}`)

function SomaVetor(vetor:number[]) {
  let soma = 0
  for (let i = 0; i < vetor.length; i++)   {
    const element = vetor[i];
    soma = soma + element!
  }
 return soma
}
console.log(`O valor da soma do vetor é ${SomaVetor([1,2,3])}`)

