import dadosReceitas from "./receitas.json" with {type:"json"}

console.log (`dados receitas`, dadosReceitas.receitas)


function exibirReceitas(){
  console.log('Entrou na função Exibir Receitas')
  // Rendereizar a primeira receita no corpo da div
  const receita = dadosReceitas.receitas[4]
  const recipe = document.getElementById("receita")
    
  recipe.innerHTML = `
    <h2>${receita.nome}</h2>
    <ul>${receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li><br>`).join("")}</ul>
    <h3>Instruções</h3>
    <ul>${receita.instrucoes.map(instrucoes => `<li>${instrucoes}</li><br>`).join("")}</ul>
    <h3>Ingredientes</h3>
    <img  src="${receita.imagem}" alt="${receita.nome}" style="width: 200px; height: 200px;">
  `;

}

exibirReceitas()