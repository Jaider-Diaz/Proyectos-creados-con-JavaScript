const abrirSidebar = document.getElementById("abrirSidebar")
const cerrarSidebar = document.getElementById("cerrarSidebar")
const sidebar = document.getElementById("sidebar")

abrirSidebar.addEventListener('click', ()=>{
    sidebar.classList.add('mostrar')
})

cerrarSidebar.addEventListener('click', ()=>{
    sidebar.classList.remove('mostrar')
})

