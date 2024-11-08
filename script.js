var form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const formData = new FormData(this);

    fetch('salvar.php', {
        method: 'POST',
        body: formData
    })

    .then(response => response.text())
    .then(data=> {
        alert(data);
        this.reset();
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

    .catch(error => console.error('Erro:', error))
}

window.onload = carregarUsuarios;