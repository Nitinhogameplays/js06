
function IMC(){
let peso = document.getElementById("peso").value
let altura = document.getElementById("altura").value
let formula = peso / (altura * altura)
let formulaFinal = formula.toFixed(1)

let button =  document.getElementsByTagName('button')
let texto = document.getElementById('imcText')

texto.textContent = `Seu IMC é ${formulaFinal}`





}
