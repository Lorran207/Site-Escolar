<?php
include '../conecta_banco_de_dados/conecta.php'; // Inclui o arquivo de conexão com o banco de dados

$user = $_POST['username']; // Recebe o usuário enviado pelo formulário
$pass = $_POST['password'];   // Recebe a senha enviada pelo formulário

// Corrige o filtro de nível (coloca entre aspas simples)
// Monta a consulta SQL para buscar um usuário com o login e senha informados
$consulta = "SELECT * FROM usuario WHERE usuario='$user' AND senha='$pass' AND nivel='usuario'";

// Executa a consulta no banco de dados
$resultado = mysqli_query($link, $consulta) or die("Erro na consulta");

// Se encontrou algum usuário, redireciona para principal.html
if (mysqli_num_rows($resultado) > 0)
    header("Location: ../../site/tela_dashboard/aluno/Aba__aluno.html");
else // Se não encontrou, redireciona para index.html
    header("Location: ../../site/login_cadastro_aluno/login.html?erro=1");
mysqli_close($link); // Fecha a conexão com o banco de dados
?>