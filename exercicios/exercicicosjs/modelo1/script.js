
function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora}horas.` 
if (hora >= 0 && hora < 12) {
    //Bom dia 
    img.src = 'manha1.png'
    document.body.style.background = '#e4cfa5'
} else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.src = 'tarde2.png'
    document.body.style.background = '#314b5b'
} else {
    //Boa noite
    img.src = 'noite3.png'
    document.body.style.background = '#02244f'
}
}  