let contador = 0

const mostrarContador = document.getElementById("contador")
const btnincrementar = document.getElementById("incrementar")
const btndesminuir = document.getElementById("desminuir")
const btnreiniciar = document.getElementById("reiniciar")
let mostrarMensaje = document.getElementById("mensaje")

btnincrementar.addEventListener('click', ()=>{
    contador ++
    mostrarContador.textContent = contador
    colorNegativo()
    verMensaje()
    
})

btndesminuir.addEventListener('click', ()=> {
    contador --
    mostrarContador.textContent = contador 
    colorNegativo()
    verMensaje()
})

btnreiniciar.addEventListener('click', ()=>{
    contador = 0
    mostrarContador.textContent = contador
    colorNegativo()
    verMensaje()
})


function colorNegativo(){
    if (contador < 0) {
        mostrarContador.classList.add('colorNegativo')
    }else{
        mostrarContador.classList.remove('colorNegativo')
    }
}


function verMensaje(){
    if (contador === 10) {
        mostrarMensaje.textContent = "¡Haz llegado al número 10!"
    }else{
        mostrarMensaje.textContent = " "
    }
}



