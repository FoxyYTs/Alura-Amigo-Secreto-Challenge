let amigos = [];

/**
 * Este fragmento de código define una función de JavaScript llamada agregarAmigo que agrega un nuevo amigo a una matriz de amigos. 
 * Primero recupera el valor de un campo de entrada con el id "amigo" y recorta cualquier espacio inicial o final. Si el valor 
 * recortado está vacío, muestra una alerta que solicita al usuario que ingrese un nombre válido. De lo contrario, agrega el valor 
 * recortado a la matriz amigos, borra el campo de entrada y llama a una función llamada mostrarListaAmigos para actualizar la 
 * visualización de la lista de amigos.
 */
function agregarAmigo() {
  const nombreAmigo = document.getElementById("amigo").value.trim();

  if (!nombreAmigo) {
    alert("Por favor, inserte un nombre válido.");
    return;
  }

  amigos.push(nombreAmigo);
  document.getElementById("amigo").value = ""; // Limpia el campo de entrada
  mostrarListaAmigos();
}

/**
 * Esta función de JavaScript, mostrarListaAmigos, actualiza la visualización de una lista de amigos en el DOM
 * creando elementos <li> para cada amigo en la matriz amigos. Primero borra la lista existente, luego itera
 * sobre la matriz amigos, creando un nuevo elemento <li> para cada amigo y agregándolo a la lista con el nombre
 * del amigo como contenido de texto.
 */
function mostrarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizar

  amigos.forEach((amigo) => {
    const elementoLista = document.createElement("li");
    elementoLista.textContent = amigo;
    listaAmigos.appendChild(elementoLista);
  });
}

/**
 * Esta función de JavaScript, sortearAmigo, selecciona aleatoriamente un amigo de la lista de amigos y
 * muestra su nombre en un elemento HTML con el id "resultado". Si la lista está vacía, muestra una alerta 
 * solicitando que se agregue al menos un amigo antes de realizar el sorteo.
 */
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Por favor, agregue al menos un amigo antes de sortear.");
    return;
  }

  const indiceAmigo = Math.floor(Math.random() * amigos.length);
  const resultadoHTML = document.getElementById("resultado");
  resultadoHTML.textContent = amigos[indiceAmigo];
}

// Event listeners para los botones
document.getElementById("agregarBtn").addEventListener("click", agregarAmigo);
document.getElementById("sortearBtn").addEventListener("click", sortearAmigo);