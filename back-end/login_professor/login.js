
import { compara_dados } from "./compara.js"

let loginAttempts = 3;

export function coleta_dados() {
  const dados = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    professor: true
  }
  compara_dados(dados)
}

export function esqueciSenha() {
  const username = document.getElementById("username").value;
  
  if (!username) {
    document.getElementById("login-message").textContent = "Digite seu email para recuperar a senha!";
    return;
  }
  
  // Aqui seria a lógica de envio de email de recuperação
  document.getElementById("login-message").textContent = `Um link para redefinir sua senha foi enviado para ${username}`;
  
  // Simular envio de email
  console.log(`Enviando email de recuperação para: ${username}`);
}

// Reset de contagens quando a página é carregada
document.addEventListener("DOMContentLoaded", () => {
  loginAttempts = 3;
  document.getElementById("attempts-left").textContent = loginAttempts;
});
window.coleta_dados = coleta_dados;