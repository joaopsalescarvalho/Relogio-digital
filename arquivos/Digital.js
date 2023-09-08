const thora = document.querySelector('.hora')
const tmin = document.querySelector('.min')
const tsec = document.querySelector('.sec')

setInterval(() => {
    const date = new Date();
   
    var hora = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    
    if (hora <10) hora = '0' + hora;
    if (min <10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;
    
    thora.innerHTML = `${hora}<br> Horas `
    tmin.innerHTML = `${min}<br> Minutos`
    tsec.innerHTML = `${sec}<br> Segundos`

}, 1000)
