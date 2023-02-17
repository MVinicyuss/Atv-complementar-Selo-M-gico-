
var el = document.createElement("div");
var box2 = document.querySelector(".Box2")

function responder(){

  el.classList = "resp"

  box2.appendChild(el)

  if(el.childNodes.length == 0){
  var text = document.createTextNode("Não é possivel responder sua pergunta no momento");
  el.appendChild(text);
  }

  el.style.cssText =
  'text-align: center;' + 
  'background-color: rgb(218, 95, 201);';

setTimeout(() => {
  limpar();
}, 2500);
 
}

function limpar(){

  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }

}