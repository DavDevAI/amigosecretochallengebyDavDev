
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = []; 


function agregarAmigo(){
    let inputamigo = document.getElementById("amigo"); 
    let nombreamigo = inputamigo.value; 

    if(!nombreamigo){
        alert('Debes ingresar un nombre, no puede estar vacío')
        return; 
    }
    //voy acumulando mi conjunto de amigos que voy agregando 
    amigo.push(nombreamigo); 
    //blanqueo la variable para blanquear el boton y pueda volver a agregar
    //blanqueo campo de texto para que pueda volver a escribir y para que pueda rellenar a la variable del input
    inputamigo.value = ""; 
    //para que todo el tiempo quede permanetemente enfocado el nombre de amigo agregado: 
    inputamigo.focus(); 
    renderAmigos(); 
}

function renderAmigos(){
    let listaAmigos = document.getElementById("listaAmigos"); 
    //como en el curso anterior esta variable va de regreso a meterle pero a HTML
    // osea que esta nos va permitir agregar dinamicamente de vuelta a html en este caso el nombre de los amigos
    // y de ahí conforme le vayamos pasando parametros a la funcion los estará proyectando
    listaAmigos.innerHTML = ""; //la dejo vacía porque va a recibir un valor dinámico TAMBIEN LA VOY LIMPIANDO

    //iterare dentro del array para que imprima cada elemento del array
    //tal y como sucede en C++, conforme vaya aumentando el nuimero de elementos
    //irá renderizando cada elemento del array osea los nombres de los amigos que vayamos agregando 

    for(let i = 0; i<amigo.length; i++){

        // creo un elemento de regreso por cada entrada que venga del input del boton de los amigos 
        // para que regrese de vuelta y los proyecte en html 

        let item = document.createElement("li");
        //como deciamos cada elemento del array crea un elemento en html 
        //y de ahi regreso a html para que de vuelta proyecte por cada elemento del array 
        item.textContent = amigo[i]; 
        listaAmigos.appendChild(item); //metodo para hacer el append pero del lado del documento de html

    }

}



function sortearAmigo(){
    if(amigo.length < 3){  //comprobacion if(amigo.length === 0){
        alert('No hay amigos para sortear'); 
        return; 
    }
    let amigosorteado = amigo[Math.floor(Math.random()* amigo.length)]; 
    let resultado = document.getElementById("resultado"); 
    resultado.innerHTML = `El amigo sorteado es: ${amigosorteado}`; 

    let limpialista = document.getElementById("listaAmigos"); 
    limpialista.innerHTML = ""; 
    resetJuego (); 
}

//funcion de reseteo, la cual limpia el array
//no es necesario volver a llamar a la principal porque el 
//evento esta constantemente ocurriendo, por lo que no es necesario
//pero como buena practica sería hacer el bloque de condiciones iniciales
// y de reinicio de juego
//aqui se podría agregar tambien el evento y boton de able y disable
function resetJuego (){
    amigo = []; 
    

}