const numero = [5,2,10,21,56,78,32]

// O reduce serve para acumular valores e sempre precisa dos dois parâmentros, o primeiro valor é o acumulador de valores
// O segundo valor é o valor que atual
// O parâmentro "200" no fechamento da função é opcional e é o valor inicial do acumulador
const soma = numero.reduce((acumulador, valorAtural)=> {
  return acumulador + valorAtural
}, 200)

console.log(soma)