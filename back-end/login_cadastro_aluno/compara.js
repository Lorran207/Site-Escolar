export function compara_dados(dados) {
  // implementar a função q vai buscar os dados no banco de dados
    const usernameTeste = "teste@gmail.com";
    const passwordTeste = "1234";
  if (dados.username === usernameTeste && dados.password === passwordTeste) {
      console.log("Login bem-sucedido!");
      window.location.href = "../../site/pagina_principal/aluno/principal.html";
  } else {
      console.log("Login ou senha incorretos.");
      console.log(username, password);
  }
}