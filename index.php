<!DOCTYPE html>
<html lang="PT-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    
</head>
<body>
    <h2>Cadastro de Usuario</h2>
    <form>
        <div>
            <label for="">Nome:</label>
            <input type="text" name="nome">
        </div>

        <div>
            <label for="">Idade:</label>
            <input type="number" name="idade" id="">
        </div>

        <div>
            <label for="">E-mail:</label>
            <input type="email" name="email" id="email">
        </div>

        <button type="submit">Cadastrar</button>
    </form>

    <h2>Lista de Usuarios Cadastrados</h2>
    <section id="listaUsuarios"></section>

    <script src="script.js"></script>
</body>
</html>