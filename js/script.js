// A função foi renomeada para refletir sua nova finalidade.
function calcularMediaPonderada() {
    // 1. OBTER OS VALORES DOS CAMPOS DE ENTRADA
    let valor1String = document.getElementById('valor1').value;
    let valor2String = document.getElementById('valor2').value;

    // 2. CONVERTER OS VALORES DE TEXTO PARA NÚMERO
    let valor1 = parseFloat(valor1String);
    let valor2 = parseFloat(valor2String);
    
    // 3. VERIFICAR SE OS VALORES SÃO NÚMEROS VÁLIDOS (Lógica inalterada)
    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, digite valores numéricos válidos em ambos os campos.");
        return;
    }

    // 4. REALIZAR O CÁLCULO DA MÉDIA PONDERADA
    
    // Definimos os pesos fixos conforme solicitado.
    const peso1 = 4;
    const peso2 = 6;

    // Aplicamos a fórmula da média ponderada.
    // (valor1 * peso1 + valor2 * peso2) / (peso1 + peso2)
    let mediaPonderada = (valor1 * peso1 + valor2 * peso2) / (peso1 + peso2);

    // 5. EXIBIR O RESULTADO NA PÁGINA

    // O método .toFixed(2) é usado para formatar o resultado para ter apenas duas casas decimais.
    document.getElementById('resultado').innerHTML = "A média ponderada é: " + mediaPonderada.toFixed(2);
}
