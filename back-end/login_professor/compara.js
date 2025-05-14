export function compara_dados(dados) {
  // implementar a função q vai buscar os dados no banco de dados
    const usernameTeste = "admin@gmail.com";
    const passwordTeste = "admin";
    const professorTeste = true;
  if (dados.username === usernameTeste && dados.password === passwordTeste && dados.professor == professorTeste) {
      console.log("Login bem-sucedido!");
      window.location.href = "../inicio/inicio.html";
  } else {
      console.log("Login ou senha incorretos.");
      console.log(username, password);
  }
}