import { compara_dados } from "./compara.js"
export function coleta_dados() {
  const dados = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  }

  // Adicione lógica de autenticação aqui
  compara_dados(dados)

}
