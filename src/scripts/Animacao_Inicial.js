//Evento iniciado apos o carregamento do index.html
document.addEventListener("DOMContentLoaded", function () {
  var texto =
    "Embarque em uma jornada fascinante pela vida e obra de um dos mais brilhantes artistas do século XIX !";
  var velocidade = 60; // Velocidade de digitação de cada letra
  var indice = 0; // Índice da letra a ser digitada
  var pElement = document.getElementById("ano"); // Seleciona o paragrafo que contem o ano atual
  var duracao = 15000; // Define a duração total da animação
  var anoFinal = 1853; // Condiçao de parada da animação, esse ano foi escolhido por ser o ano de nascimento de Van Gogh
  var intervalo = duracao / (parseInt(pElement.textContent) - anoFinal); // Define a velocidade em que os numeros são trocados

  function digitar() {
    // Verifica se todos os caracteres já foram digitados
    if (indice < texto.length) {
      // Adiciona o próximo caractere ao elemento <p> e atualiza o indice
      document.getElementById("texto").textContent += texto.charAt(indice);
      indice++;

      //Apos o tempo determinado anteriormente a função é chamada novamente de forma recursiva
      setTimeout(digitar, velocidade);
    }
  }

  function diminuirAno() {
    //pega a informação presente no html
    var anoAtual = parseInt(pElement.textContent);

    if (anoAtual > anoFinal) {
      // Em quando o anoAtual != 1853, o valor sofre um decremento e seu valor é atualizado no html
      pElement.textContent = anoAtual - 1;
      //Apos o tempo determinado anteriormente a função é chamada novamente de forma recursiva
      setTimeout(diminuirAno, intervalo);
    } else {
      // Apos atingir a condição de parada, o usuario é redirecionado para a pagina home do projeto
      window.location.href = "src/pages/home.html";
    }
  }

  diminuirAno(); // Inicia a função do ano
  digitar(); // Inicia a função de digitação
});
