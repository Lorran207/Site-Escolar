function compara_dados(username, password) {
  // Valores de teste
  const usernameTeste = "admin@gmail.com";
  const passwordTeste = "1234";

  // Comparação
  if (username === usernameTeste && password === passwordTeste) {
      console.log("Login bem-sucedido!");
      alert("Login bem-sucedido!");
  } else {
      console.log("Login ou senha incorretos.");
      alert("Login ou senha incorretos.");
      console.log(username, password);
  }
}
export { compara_dados };