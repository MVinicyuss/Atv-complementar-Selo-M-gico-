const respostas =["Certeza!",
"Não tenho tanta certeza.",
"É decididamente assim.",
"Não conte com isso.",
"Sem dúvidas!",
"Pergunte novamente mais tarde.",
"Sim, definitivamente!",
"Minha resposta é não.",
"Você pode contar com isso.",
"Melhor não te dizer agora.",
"A meu ver, sim.",
"Minhas fontes dizem não.",
"Provavelmente.",
"Não é possível prever agora.",
"Perspectiva boa.",
"As perspectivas não são tão boas.",
"Sim.",
"Concentre-se e pergunte novamente.",
"Sinais apontam que sim."]

var el = document.createElement("div");
var box2 = document.querySelector(".Box2")

function responder(){
  
  box2.appendChild(el)

  var randomIndex = Math.floor(Math.random() * respostas.length)
  var randomElement = respostas[randomIndex];

  if(el.childNodes.length === 0){
  var text = document.createTextNode(randomElement);
  el.appendChild(text);
  }
  
  //Estilizando a div criada (CENTRALIZAR NÃO FUNCIONA)
  el.style.cssText =
  'text-align: center;' + 
  'background-color: rgb(218, 95, 201);';

  setTimeout(() => {
    limpar();
  }, 3000);
}

function limpar(){

  el.innerHTML ="";

}
