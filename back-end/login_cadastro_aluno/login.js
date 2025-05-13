import { compara_dados } from './compara.js';

export function coleta_dados() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Usuário:", username);
    console.log("Senha:", password);

    // Adicione lógica de autenticação aqui
    compara_dados(username, password)

  }