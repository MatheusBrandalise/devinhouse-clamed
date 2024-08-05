function calculate (value1, operator, value2){ 
  switch (operator) {
    case '+':
        return value1 + value2;
    case '-':
        return value1 - value2;
    case '*':
        return value1 * value2;
    case '/':
        if (valor2 === 0) {
            return 'Erro: Divisão por zero';
        }
        return value1 / value2;
    default:
        return 'Operador inválido';
}
}