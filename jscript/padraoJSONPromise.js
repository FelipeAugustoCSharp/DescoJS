
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json()) //vai pegar os dados e os dados que ele conseguir, vai retornar como json
.then(data => {
    preencherLista(data);
})

function preencherLista(data) {
    const listaContainer = document.getElementById("lista-container")
    const ul = document.createElement('ul');
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name
        ul.appendChild(li)
    });
    listaContainer.appendChild(ul);
}