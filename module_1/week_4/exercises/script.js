document.getElementById("calculator-button").addEventListener("click", function () {
    // Chamar a função sum() quando o botão for clicado
    sum()
  })

function sum() {
  // Capturar os valores dentro da função para garantir que sejam lidos no momento do clique
  const valueOne = parseFloat(document.getElementById("inputNumberOne").value);
  const valueTwo = parseFloat(document.getElementById("inputNumberTwo").value);

  // Verificar se ambos os números são válidos
  if (!isNaN(valueOne) && !isNaN(valueTwo)) {
    // Realizar a soma
    const result = valueOne + valueTwo

    // Exibir o resultado
    document.getElementById('resultDisplay').textContent = "A soma é " + result;
  } else {
    // Mensagem de erro se algum número não for válido
        document.getElementById('resultDisplay').textContent = "Por favor, digite dois números válidos.";
  }
}

function consoleTest(){
  const test = "Script funcionando!"
  console.log(test)
}
