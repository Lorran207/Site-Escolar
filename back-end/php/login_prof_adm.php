<?php
include 'conecta.php'; // Inclui o arquivo de conexão com o banco de dados

$user = $_REQUEST['username']; // Recebe o usuário enviado pelo formulário
$pass = $_REQUEST['password'];   // Recebe a senha enviada pelo formulário

// Verifica as credenciais padrão
if ($user == 'admin@gmail.com' && $pass == 'admin') {
    // Login com credenciais padrão - redireciona para professor
    header("Location: ../../site/tela_dashboard/professor/Aba-fessores.html");
    exit();
} else {
    // Monta a consulta SQL para buscar um usuário com o login e senha informados
    $consulta = "SELECT * FROM usuario WHERE usuario='$user' AND senha='$pass'";
    
    // Executa a consulta no banco de dados
    $resultado = mysqli_query($link, $consulta) or die("Erro na consulta");
    
    // Se encontrou algum usuário, redireciona conforme o nível
    if (mysqli_num_rows($resultado) > 0){
        $row = mysqli_fetch_assoc($resultado);
        $nivel = $row['nivel'];

        if ($nivel == 'operador') {
            header("Location: ../../site/tela_dashboard/professor/Aba-fessores.html");
        } elseif ($nivel == 'administrador') {
            header("Location: ../../site/tela_dashboard/coordenador/aba_coordena.html");
        } else {
            header("Location: ../../site/inicio/inicio.html");
        }
        exit();
    } else {
        // Se não encontrou, redireciona para página de login com erro
        header("Location: ../../site/login_professor/login.html?erro=1");
        exit();
    }
}
mysqli_close($link); // Fecha a conexão com o banco de dados
?>