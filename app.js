//Array para almacenar nombres
let amigos = [];

//Funcion que agrega amigos
function agregarAmigo() {
    let obtenerNombres = document.getElementById("amigo").value;
    console.log(obtenerNombres);
    if (obtenerNombres == "") {
        alert("Debe ingresar un nombre");
    } else {
        amigos.push(obtenerNombres);  
        console.log(amigos);
        document.getElementById("amigo").value = "";
        mostrarLista();
    }
}

//Funcion que recorre un array
function mostrarLista() {
    let elementoLista = document.getElementById("listaAmigos");
    elementoLista.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
        let li = document.createElement("li");
        li.textContent = amigos[index];
        elementoLista.appendChild(li);
    }
}

//Funcion que sortea los nombres
function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Debes agregar al menos un amigo");
    } else if (amigos.length == 1) {
        alert("Debes agregar al menos dos amigos");
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        resultado.innerHTML = `El/La ganador/a del sorteo es:  ${amigoSorteado}`;
        document.getElementById("botonSortear").setAttribute("disabled", "true");

        setTimeout(() => {
        // Limpiar la lista de amigos
            amigos = [];
            let listaAmigos = document.getElementById("listaAmigos");
            listaAmigos.innerHTML = "";
        // Limpiar el resultado
            resultado.innerHTML = "";
            resultado.innerHTML = "El sorteo se ha reiniciado";
            //Limpia la pantalla
            setTimeout(() => {
                resultado.innerHTML = "";
                document.getElementById("botonSortear").removeAttribute("disabled");
            }, 1000);
        }, 3000);
    }
    
}


