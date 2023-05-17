var listaDeTarefas = [];
function newitem() {
 armazenavalor()

 
   
}
function armazenavalor() {
 var valor = document.getElementById("newtodo").value
 if (valor) {
  listaDeTarefas.push(valor);
  newli(valor);
  document.getElementById("newtodo").value = "";
 }
 
 else {alert("Escreva algo")
} return
 

}
 
function newli(valor) {
 const linew = document.createElement("li")
 linew.innerText = valor
 document.getElementById("myul").appendChild(linew);
 linew.classList.add("itens")
 newbtn(linew)
}   
function newbtn(linew) {

 const btn = document.createElement("button")
 const button = document.createElement("button")
 //var lbl = document.createTextNode("excluir/e872");        
 //btn.appendChild(lbl);   

 linew.appendChild(btn)
 linew.appendChild(button)
 btn.classList.add("btn")
 button.classList.add("button")

 btn.onclick = function excluir(e) {
  var ul = document.getElementById("myul")
  ul.removeChild(linew)
 }
  button.onclick = function command (e) {
   pronto()
 }
}
function pronto() {
 var li = document.querySelector("li")
 if (li.style.textDecoration = "none") {
  li.style.textDecorationLine = "line-through"
 }
 
}
