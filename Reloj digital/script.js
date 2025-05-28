function actualizarReloj () {
    const hora = new Date()

    let horas = hora.getHours()
    let minutos = hora.getMinutes()
    let segundos = hora.getSeconds()
    let periodo = "AM"

    if (horas >= 12){
        periodo = "PM"
    }

    if (horas > 12){
        horas -= 12
    }

    if(horas === 0){
        horas = 12
    }

    horas = horas < 10 ? "0" + horas : horas
    minutos = minutos < 10 ? "0" + minutos : minutos
    segundos = segundos < 10 ? "0" + segundos : segundos

    const horaActual = `${horas}:${minutos}:${segundos} ${periodo}`
    document.getElementById("reloj").textContent = horaActual
}

actualizarReloj() // Ejecutar una vez al inicio
setInterval(actualizarReloj, 1000) // Ejecutar cada segundo
