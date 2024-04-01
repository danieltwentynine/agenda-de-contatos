const form = document.getElementById('form')

let linhas = ''

const nome = document.getElementById('campo-nome')
const telefone = document.getElementById('campo-tel')

const nomeArray = []
const telefoneArray = []

const darkModeToggle = document.getElementById('darkModeToggle')
const modeIcon = document.getElementById('modeIco')

darkModeToggle.addEventListener('click', () => {
    if(document.body.classList.contains('dark-mode')){
        document.body.classList.remove('dark-mode')
        darkModeToggle.style.backgroundColor = '#E9E9E9'
        darkModeToggle.style.color = 'black'
        darkModeToggle.innerHTML = 'Tema Escuro'
    }else {
        document.body.classList.add('dark-mode')
        darkModeToggle.style.backgroundColor = 'rgb(28, 28, 28)'
        darkModeToggle.style.color = 'white'
        darkModeToggle.innerHTML = 'Tema Claro'
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault()

    addLine()
    updateTable()
    getContacts()
})

function addLine() {
    if(telefoneArray.includes(telefone.value)){
        alert(`O número ${telefone.value} já foi inserido!`)
    }else{
        nomeArray.push(nome.value)
        telefoneArray.push(telefone.value)

        let linha = '<tr>'
        linha += `<td>${nome.value}</td>`
        linha += `<td>${telefone.value}</td>`
        linha += '</tr>'
        linhas += linha
    }

    nome.value = ''
    telefone.value = ''
}

function updateTable() {
    const tableBody = document.getElementById('tbody')
    tableBody.innerHTML = linhas
}

function totalContacts() {
    const total = telefoneArray.length
    return total
}

function getContacts() {
    const getContact = document.getElementById('totalC')
    getContact.innerHTML = totalContacts()
}