// Começamos definindo o modo inicial do botão (calcular ou limpar)
let modo = "calcular";

// Esta função é chamada quando clicamos no botão principal (Calcular ou Limpar)
function acaoBotao() {
  // Captura os elementos do formulário
  const nome = document.getElementById("nome").value;
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const resultado = document.getElementById("resultado");
  const botao = document.getElementById("botaoPrincipal");

  // Verificamos qual é o modo atual do botão
  if (modo === "calcular") {
    // Verifica se os campos foram preenchidos corretamente
    if (nome !== "" && !isNaN(altura) && !isNaN(peso)) {
      // Calcula o IMC
      const imc = (peso / (altura * altura)).toFixed(1);
      let classificacao = "";

      // Define a classificação do IMC
      if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        document.getElementById("mensagem").classList.remove("hidden");
      } else if (imc < 25) {
        classificacao = "Peso normal";
        document.getElementById("mensagem").classList.add("hidden");
      } else if (imc < 30) {
        classificacao = "Sobrepeso";
        document.getElementById("mensagem").classList.remove("hidden");
      } else {
        classificacao = "Obesidade";
        document.getElementById("mensagem").classList.remove("hidden");
      }

      // Mostra o resultado na tela
      resultado.textContent = `Olá ${nome}, seu IMC é ${imc} e você está classificado como ${classificacao}.`;

      // Troca o texto, cor e ícone do botão para "Limpar"
      botao.textContent = "🧹 Limpar Dados";
      botao.style.backgroundColor = "#ff6347"; // tom de vermelho (Tomate)
      modo = "limpar"; // Muda o modo
    } else {
      // Se faltar algum campo, mostra aviso
      resultado.textContent = "Preencha todos os campos!";
    }
  } else {
    // Modo "limpar" — apaga todos os campos e reseta
    document.getElementById("nome").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    resultado.textContent = "";

    // Volta o botão ao modo original
    botao.textContent = "Calcular";
    botao.style.backgroundColor = "#4CAF50"; // tom de verde
    modo = "calcular"; // Muda de volta para calcular
  }
}

// Botão "Consultar" abre o WhatsApp com uma mensagem pronta
document.getElementById("consultar").addEventListener("click", () => {
  const numero = "5551985501971"; // Número com DDD e código do país (Brasil)
  const mensagem = encodeURIComponent(
    "Olá! Gostaria de marcar uma consulta com o nutricionista. Vi a calculadora de IMC."
  );
  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
});
