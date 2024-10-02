const produtos = [ 
  { id: 1, nome: 'Camiseta', emEstoque: true }, 
  { id: 2, nome: 'Tênis', emEstoque: false }, 
  { id: 3, nome: 'Calça Jeans', emEstoque: true },
  { id: 4, nome: 'Jaqueta', emEstoque: false } 
  ];

let filtrarProdutos = false

const botaoFiltrar = document.getElementById("botaoFiltrar")

botaoFiltrar.addEventListener("click", function () {
  filtrarProdutos = true
  mostrarProdutos()
})

const botaoLimpar = document.getElementById('botaoLimpar')

botaoLimpar.addEventListener("click", function () {
  filtrarProdutos = false
  mostrarProdutos()
})

function mostrarProdutos(){
  const listaUl = document.getElementById("listaProdutos")
  listaUl.innerHTML = "<ul id='listaProdutos'></ul>"

  let produtosFiltrados = []

  if(filtrarProdutos){
      produtosFiltrados = 
      produtos.filter(produto => produto.emEstoque)
  } else {
      produtosFiltrados = produtos
  }

  produtosFiltrados.map(produto => {
      const li = document.createElement("li")
      li.innerText = `${produto.id} - ${produto.nome} - Em estoque: ${produto.emEstoque}`
      listaUl.appendChild(li)
  })
}

mostrarProdutos()