export function compara_dados(dados) {
  // implementar a função q vai buscar os dados no banco de dados
    const usernameTeste = "admin@gmail.com";
    const passwordTeste = "admin";
  if (dados.username === usernameTeste && dados.password === passwordTeste) {
      console.log("Login bem-sucedido!");
      window.location.href = "../inicio/inicio.html";
  } else {
      console.log("Login ou senha incorretos.");
      console.log(username, password);
  }
}