const inputTarefa = document.querySelector('#input-tarefa')
const btnTarefa = document.querySelector('#btn-tarefa')
const tarefas = document.querySelector('#tarefas')

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return
    criarTarefa(inputTarefa.value)
})

function criarTarefa(textoInput) {
    const li = criarLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criarBotaoApagar(li)
}

function criarLi() {
    const li = document.createElement('li')
    return li
}

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criarBotaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)
}

document.addEventListener('click', function(event) {
    const elemento = event.target
    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove()
    }
})