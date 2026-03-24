let frases = ['f1', ['f2'], ['f3']]

function geradorMensagem(){
    if(frases.length == 0){
        frases = [...fresesCopiada]
    }
let indiceGerado = math.floor(math.random()* frases.length)
let frasesGerada = frases[indiceGerado]
document.getElementById('mesagem').textContent = frasesGerada
frases.splice(indiceGerado,1)
}

geradorMensagem();
