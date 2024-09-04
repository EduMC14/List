
let input = document.getElementById('input-task');
let btnAdd = document.getElementById('btn-add')
let list = document.getElementById('list')



btnAdd.addEventListener('click', (e) => {
    e.preventDefault()
    

    let value = input.value;
    let div = document.createElement('div')
    div.classList.add('div-list','list-group-item', 'col-12');

    if (value === '') {
        alert('Por favor escribe una tarea')
        return
    }

    let li = document.createElement('li');
    li.classList.add('item-li')
    li.textContent = value;

    let btnDelete = document.createElement('button');
    btnDelete.textContent = 'Eliminar';
    btnDelete.classList.add('btn', 'btn-danger')
    btnDelete.setAttribute('id', 'btnDelete');

    let btnFinalizar = document.createElement('button');
    btnFinalizar.textContent = 'Finalizar'
    btnFinalizar.classList.add('btn', 'btn-success')

    div.appendChild(li)
    div.appendChild(btnDelete)
    div.appendChild(btnFinalizar)
    list.appendChild(div)

    btnDelete.addEventListener('click', () => {
        btnDelete.parentElement.remove()
    })

    btnFinalizar.addEventListener('click', () =>{
        div.classList.add('list-group-item-success')
        li.classList.add('text-decoration-line-through')
        
    })
})


