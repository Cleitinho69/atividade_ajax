var form = document.querySelector('form');

console.log(form)

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    var formData = new FormData(form);

    fetch('salvar.php', {
        method: 'POST',
        body: formData
    })

    .then(response => response.text())
    .then(data=> {
        alert(data);
        form.reset();
        carregarUsuarios();
    })

    .catch(error => console.error('Erro:', error))
})

function carregarUsuarios(){
    fetch('consultar.php')
    .then(response => response.text())
    .then(data => {
        document.querySelector('#listaUsuarios').innerHTML = data;
    })

    .catch(error => console.error('Erro:', error));
}

window.onload = carregarUsuarios;