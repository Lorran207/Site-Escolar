
export function compara_dados(dados) {
  // implementar a função q vai buscar os dados no banco de dados
  const usernameTeste = "admin@gmail.com";
  const passwordTeste = "admin";
  const professorTeste = false;
  
  if (dados.username === usernameTeste && dados.password === passwordTeste && dados.professor == professorTeste) {
    console.log("Login bem-sucedido!");
    window.location.href = "../../site/tela_dashboard/aluno/Aba__aluno.html";
    return true;
  } else {
    console.log("Login ou senha incorretos.");
    console.log(dados.username, dados.password);
    return false;
  }
}
