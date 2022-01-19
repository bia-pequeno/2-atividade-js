let idade = 18

if (idade >= 18) {
    console.log("parabens voce é de maior")
}
else{
    console.log("voce é de menor")
}
let numero = 18
let humano = true

if (numero >=18 && humano == true ) {
    console.log("voce é de maior")
}

let mês = "janeiro"

if (mês == "janeiro") {
    console.log("Feliz Aniversario")
}
else{
    console.log("Não é seu aniversario")
}

let nome = "Beatriz"

if (nome == "Raquel") {
    console.log("Seu nome começa com R")
}
else{
    console.log("Seu nome não começa com R")
}

let nome2 = "Beatriz"
let sobrenome ="Pequeno"

if(sobrenome.length > 6 || nome2.substring(0,1) === "E") {
    console.log("Seu sobrenome tem mais de 6 letras ou seu nome começa com a letra E")
}
else{
    console.log("Seu sobrenome não tem mais de 6 letras ou seu nome não começa com a letra E")
}