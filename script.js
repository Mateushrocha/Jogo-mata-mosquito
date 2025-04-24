var altura = 0
var largura = 0
var vidas = 1
var tempo = 20
var tempocronometro = 1500

var nivel = window.location.search
nivel = nivel.replace("?", "")

if(nivel === 'facil'){
    tempocronometro = 1500
}else if( nivel === 'normal'){
    tempocronometro = 1000
}else if( nivel === 'dificil'){
    tempocronometro = 750
}


function ajusteDeTela(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log( largura, altura)
}

var cronometro = setInterval(function(){
    tempo--
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosca)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById("cronometro").innerHTML = tempo
    }
}, 1000)

ajusteDeTela()

function mosca(){


    if(document.getElementById("mosquito")){
        document.getElementById("mosquito").remove()

        if(vidas > 3){
            window.location.href = "gameOver.html"
        }else{
            document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) -90
    var posicaoY = Math.floor(Math.random() * altura) -90

    if(posicaoX <= 90){
        posicaoX = posicaoX + 90
    }
    if(posicaoY <= 90){
        posicaoY = posicaoY + 90
    }

    var mosquito = document.createElement( "img" )
    mosquito.src = "imagens/mosca.png"
    mosquito.className = classesAleatorias() + " " + ladosaleatorios()
    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"
    mosquito.style.position = "absolute"
    mosquito.id = "mosquito"
    mosquito.onclick = function matar(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}


function classesAleatorias(){
    var ale = Math.floor(Math.random() * 3)

    switch(ale){
        case 0:
            return "mosquito1"
        case 1:
           return "mosquito2"
        case 2:
           return "mosquito3"
    }
}

function ladosaleatorios(){
    var ale = Math.floor(Math.random() * 2)

    switch(ale){
        case 0:
            return "ladoA"
        case 1:
           return "ladoB"
    }
}