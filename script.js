const pokemons = [
  { nome: "Bulbasaur",
   img: "https://i.imgur.com/i8XNPzH.png"},
  { nome: "Charmander",
   img: "https://i.imgur.com/hw6r9jp.png"},
  { nome: "Squirtle",
   img: "https://i.imgur.com/luFwOtt.png"},
  { nome: "Caterpie",
   img: "https://i.imgur.com/fYd0zhk.png"},
  { nome: "Butterfree",
   img: "https://i.imgur.com/N7hW4ia.png"},
  { nome: "Pidgey",
   img: "https://i.imgur.com/sTwW96f.png"},
  { nome: "Pikachu",
   img: "https://i.imgur.com/DA8VZcl.png"},
  { nome: "Jigglypuff",
   img: "https://i.imgur.com/83gAWBc.png"},
  { nome: "Eevee",
   img: "https://i.imgur.com/J2llTmP.png"},
  { nome: "Psyduck",
   img: "https://i.imgur.com/DepWIsP.png"},
  { nome: "Magikarp",
   img: "https://i.imgur.com/aeVVZwg.png"},
  { nome: "Rattata",
   img: "https://i.imgur.com/ymDTIPD.png"},
  { nome: "Mewtwo",
   img: "https://i.imgur.com/gx3Lq7l.png"}]

const enviar = document.getElementById('enviar')
const refaz = document.getElementById('reload')
const img = document.querySelector('img')

var numero = 0;

function aleatorio(){
  numero = Math.floor(Math.random() * pokemons.length)

  img.setAttribute('src', pokemons[numero].img)
}

resetar()

function resetar(){
  document.querySelector('span').innerHTML = " ";
  document.getElementById('imgpokemon').className = null
  aleatorio()
}

enviar.onclick = () => {
    let resposta = document.querySelector('input').value.trim();

    if(resposta.length){
        if(resposta.toLowerCase() == pokemons[numero].nome.toLowerCase()){
      document.querySelector('span').innerHTML = "Parabéns! É o " + pokemons[numero].nome
      document.getElementById('imgpokemon').className = "acertou"
      document.querySelector('input').value = ""
      setTimeout(() => { resetar(); }, 2000)
    }else{
      document.querySelector('span').innerHTML = "Você errou! É o " + pokemons[numero].nome
      document.getElementById('imgpokemon').className = "acertou"
      document.querySelector('input').value = ""
      setTimeout(() => { resetar(); }, 2000)
    }
  }else{
    document.querySelector('span').innerHTML = "Coloque o nome"
  }
}

refaz.onclick = resetar