const colheresArroz = 2 
const colheresFeijao = 2
const colheresFarinha = 1
const colheresMistura = 1

let quantidadeArroz
let quantidadeFeijao
let quantidadeFarinha
let quantidadeMistura

if (colheresArroz <= 2) {
    quantidadeArroz = ("Você comeu bem, não desperdiçou nada")
} else {
    quantidadeArroz = ("Você colocou mais do que deveria, desperdiçou comida")
}

if (colheresFeijao <= 2) {
    quantidadeFeijao = ("Você comeu bem, não desperdiçou nada")
} else {
    quantidadeFeijao = ("Você colocou mais do que deveria, desperdiçou comida")
}

if (colheresFarinha <= 1) {
    quantidadeFarinha = ("Você comeu bem, não desperdiçou nada")
} else {
    quantidadeFarinha = ("Você colocou mais do que deveria, desperdiçou comida")
}

if (colheresMistura <= 1) {
    quantidadeMistura = ("Você comeu bem, não desperdiçou nada")
} else {
    quantidadeMistura = ("Você colocou mais do que deveria, desperdiçou comida")
}

const resumo = `
colheres de arroz que você aguenta: ${colheresArroz}-> ${quantidadeArroz}
colheres de feijão que você aguenta: ${colheresFeijao}-> ${quantidadeFeijao}
colheres de farinha que você aguenta: ${colheresFarinha}->  ${quantidadeFarinha}
colheres de mistura que você aguenta: ${colheresMistura}-> ${quantidadeMistura}
`

console.log(resumo)  
