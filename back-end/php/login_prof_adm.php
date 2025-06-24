<?php
include 'conecta.php'; // Inclui o arquivo de conexão com o banco de dados

$user = $_REQUEST['username']; // Recebe o usuário enviado pelo formulário
$pass = $_REQUEST['password'];   // Recebe a senha enviada pelo formulário

// Monta a consulta SQL para buscar um usuário com o login e senha informados
$consulta = "SELECT * FROM usuario WHERE usuario='$user' AND senha='$pass'";

// Executa a consulta no banco de dados
$resultado = mysqli_query($link, $consulta) or die("Erro na consulta");

// Se encontrou algum usuário, redireciona para principal.html
if (mysqli_num_rows($resultado) > 0){
    $row = mysqli_fetch_assoc($resultado);
    $nivel = $row['nivel'];

    if ($nivel == 'operador') {
        header("../../site/tela_dashboard/professor/Aba-fessores.html");
    } elseif ($nivel == 'administrador') {
        header("../../site/tela_dashboard/administrador/aba_coordenador.html");
    } else {
        header("../../site/inicio/inicio.html"); // Default caso o nivel não seja operador nem administrador
    }
}
else // Se não encontrou, redireciona para index.html
    header("location:index.html");
mysqli_close($link); // Fecha a conexão com o banco de dados
?>