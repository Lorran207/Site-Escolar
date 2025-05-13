
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  
  // Carregar tema salvo
  const savedTheme = localStorage.getItem("theme") || "dark";
  root.setAttribute("data-theme", savedTheme);
  toggle.checked = savedTheme === "light";

  // Para remover a classe pristine que previne animação no carregamento
  toggle.addEventListener("click", () => {
    toggle.removeAttribute("class");
    toggle.classList.add("theme-toggle");
    
    const newTheme = toggle.checked ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
