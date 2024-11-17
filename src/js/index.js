const botaoGeradorConselho = document.querySelector(".btn-gerador-conselhos")
const idConselho = document.querySelector('.id-conselho')
const descricaoConselho = document.querySelector('#mensagem-conselho')

async function conselho() {

    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    return await response.json() 
}

async function mensagemConselho(){
    const conselhos = await conselho()
    const idDoConselho = conselhos.slip.id
    const mensagemConselhos = conselhos.slip.advice
    idConselho.innerText = `ADVICE #${idDoConselho}`
    descricaoConselho.innerText = `"${mensagemConselhos}"`
}
mensagemConselho()

botaoGeradorConselho.addEventListener('click', (e) => {
    e.preventDefault()

    mensagemConselho()
 
})
