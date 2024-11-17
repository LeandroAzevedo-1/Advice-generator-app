const botaoGeradorConselho = document.querySelector(".btn-gerador-conselhos")
const idConselho = document.querySelector('.id-conselho')
const conselhorMensagem = document.querySelector('#mensagem-conselho')

async function getConselho() {
    try{
        const response = await fetch("https://api.adviceslip.com/advice")

    if(!response.ok){
        throw new error("Ocorreu um erro ao tentar bucar informações da API.")
    }

        const conselhos = await response.json() 
        const idDoConselho = conselhos.slip.id
        const mensagemConselhos = conselhos.slip.advice
        idConselho.innerText = `ADVICE #${idDoConselho}`
        conselhorMensagem.innerText = `"${mensagemConselhos}"`
    } catch(error){
        console.error("Erro ao tentar buscar informações da API", error)
    }
}
getConselho()

botaoGeradorConselho.addEventListener('click', (e) => {
    e.preventDefault()

    getConselho()
 
})
