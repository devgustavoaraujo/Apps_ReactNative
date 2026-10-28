const container = document.querySelector("#container");

container.classList.add("container");

container.innerHTML = `

<h1> Lista de Tarefas </h1>

<div id="messageRemove" >

<div id="containerMessage">
<div id="topMessage"> 
<h2>Você tem certeza?</h2>
<a id="close"><img id="closeImage" src="Image/close.png"/></a>
</div>
 </div>

 <div id="subtitulo">
 <p>Deseja realmente apagar essa tarefa? </p>
 </div>

 <div id="buttonMessage">
 <button id="cancelar">Cancelar</button>
 <button id="confirmar">Confirmar</button>
 </div>

</div>

<div id="containerDisplay">
<div id="containerCard">
<div id="textDiv">
<h3 id="titulo">Titulo da Nota</h3>
<p id="text"> Texto da Nota</p> 
</div>

<div id="actionButtons"> 
<button id="concluir"><img id="check" src="Image/check.png"/> </button>
<button id="remove"><img id="trash" src="Image/trash.png"/></button>
</div>
</div>

<div id="menuText">
<div id="content"> 
<input id="textInput" type="text" placeholder="Qual sua Pŕoxima Tarefa..."> </input>
<button id="send"><img id="imageButton" src="Image/send.png"></img> </button>
</div>
</div>
</div>

`;

const concluir = document.querySelector("#concluir");
const remove = document.querySelector("#remove");
const form = document.querySelector("#containerDisplay");
const titulo = document.querySelector("#titulo");
const text = document.querySelector("#text");
const messageRemove = document.querySelector("#messageRemove");
const containerDisplay = document.querySelector("#containerDisplay");
const close = document.querySelector("#close");
const cancelar = document.querySelector("#cancelar");
const confirmar = document.querySelector("#confirmar");

concluir.addEventListener("click", () => {
  form.style.backgroundColor = "rgba(0, 255, 0, 0.63)";
  titulo.style.textDecoration = "line-through";
  text.style.textDecoration = "line-through";
});

remove.addEventListener("click", () => {
  messageRemove.style.display = "block";
  containerDisplay.style.filter = "blur(8px)";
});

close.addEventListener("click", () => {
  messageRemove.style.display = "none";
  containerDisplay.style.filter = "";
});

cancelar.addEventListener("click", () => {
  messageRemove.style.display = "none";
  containerDisplay.style.filter = "";
});

confirmar.addEventListener("click", () => {
  form.remove();
  setTimeout(() => {
    messageRemove.style.display = "none";
    containerDisplay.style.filter = "";
  });
});
