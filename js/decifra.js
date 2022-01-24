/* Mostrar a parte de incremento da Cifra */
var escolhas = document.querySelector("select");

escolhas.addEventListener("change", function (evento) {
  evento.preventDefault();

  var incremento = document.getElementById("valorIncremento");

  if (evento.target.value == "cCesar") {
    incremento.style = "display: flex";
  } else {
    incremento.style = "display: none";
  }
});

/* botão muda o texto e também a cor da pág */
var btn = document.querySelectorAll('input[name="codific"]');

btn.forEach((radio) => {
  radio.addEventListener("change", function (evento) {
    evento.preventDefault();

    var botao = document.getElementById("submit");

    if (evento.target.value == "decodificar") {
      botao.innerHTML = "Decodificar mensagem";
      document.querySelector("html").style.filter = "hue-rotate(175deg)";
    } else {
      botao.innerHTML = "Codificar mensagem";
      document.querySelector("html").style.filter = "hue-rotate(300deg)";
    }
  });
});

/* CRIPTOGRAFIAS */
var formulario = document.forms.formulario;

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  var texto = formulario.texto.value;
  var escolha = formulario.escolherCod.value;
  var botoes = formulario.codific.value;
  var numeroIncremento = formulario.numeroIncrementos.value;
  var mensagemFinal = "";

  if (escolha == "cCesar") {
    mensagemFinal = cesar(botoes, texto, numeroIncremento);
  } else {
    mensagemFinal = base64(botoes, texto);
  }

  var resultadoTexto = document.getElementById("saidaTexto");
  resultadoTexto.innerHTML = `${mensagemFinal}`;
});

/* Cifra */
function cesar(codific, texto, numeroIncremento) {
  numeroIncremento = Number(numeroIncremento);

  var mensagemFinal = "";

  for (var i = 0; i < texto.length; i++) {
    var letra = texto[i];
    var codigo = letra.charCodeAt();

    if (codific == "codificar") {
      codigo += numeroIncremento;
    } else {
      codigo -= numeroIncremento;
    }
    mensagemFinal += String.fromCharCode(codigo);
  }
  return mensagemFinal;
}

/* Base */
function base64(codific, texto) {
  if (codific == "codificar") {
    return btoa(texto);
  } else {
    return atob(texto);
  }
}
