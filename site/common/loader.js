
function showLoader() {
  document.getElementById('overlay-loader').style.display = 'block';
  document.getElementById('loader-container').style.display = 'flex';
}

function hideLoader() {
  document.getElementById('overlay-loader').style.display = 'none';
  document.getElementById('loader-container').style.display = 'none';
}

// Função para mostrar o loader ao navegar para outra página
function navigateWithLoader(url, delay = 1500) {
  showLoader();
  setTimeout(() => {
    window.location.href = url;
  }, delay);
}

// Aplicar loader em todos os links de navegação quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  // Ocultar o loader inicialmente (se estiver visível)
  hideLoader();
  
  // Mostrar o loader quando a página estiver carregando
  window.addEventListener('beforeunload', function() {
    showLoader();
  });
  
  // Modificar todos os elementos que têm onclick com redirecionamentos
  const elementsWithOnclick = document.querySelectorAll('[onclick*="window.location"]');
  elementsWithOnclick.forEach(element => {
    const originalOnclick = element.getAttribute('onclick');
    if (originalOnclick) {
      // Extrair a URL do atributo onclick
      const match = originalOnclick.match(/window\.location\.href\s*=\s*['"]([^'"]*)['"]/);
      if (match && match[1]) {
        const url = match[1];
        // Substituir o onclick original pelo nosso com loader
        element.setAttribute('onclick', `navigateWithLoader('${url}'); return false;`);
      }
    }
  });
  
  // Também interceptar cliques em links normais
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (link.href && !link.href.startsWith('javascript') && !link.target) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navigateWithLoader(this.href);
      });
    }
  });
  
  // Modificar formulários de login/cadastro para mostrar o loader
  const buttons = document.querySelectorAll('button[type="button"]');
  buttons.forEach(button => {
    const originalOnclick = button.getAttribute('onclick');
    if (originalOnclick && (originalOnclick.includes('coleta_dados') || originalOnclick.includes('login'))) {
      // Preservamos a função original, mas adicionamos o loader
      button.setAttribute('onclick', `showLoader(); ${originalOnclick}`);
    }
  });
});
