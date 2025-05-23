
import { compara_dados } from "./compara.js"

let loginAttempts = 3;

export function coleta_dados() {
  const dados = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    professor: true
  }

  const messageEl = document.getElementById("login-message");
  const attemptsEl = document.getElementById("attempts-left");
  
  if (!dados.username || !dados.password) {
    messageEl.textContent = "Preencha todos os campos!";
    return;
  }

  if (loginAttempts > 0) {
    // Verifica credenciais
    const loginSuccess = compara_dados(dados);
    
    if (!loginSuccess) {
      loginAttempts--;
      attemptsEl.textContent = loginAttempts;
      
      if (loginAttempts === 0) {
        messageEl.textContent = "Número máximo de tentativas excedido!";
        document.querySelector("button").disabled = true;
        setTimeout(() => {
          loginAttempts = 3;
          attemptsEl.textContent = loginAttempts;
          document.querySelector("button").disabled = false;
          messageEl.textContent = "";
        }, 30000); // 30 segundos de bloqueio
      } else {
        messageEl.textContent = "Email ou senha incorretos!";
      }
    }
  }
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
