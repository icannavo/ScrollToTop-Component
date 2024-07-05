import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Verifica se há um hash na URL
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Se há um hash, rolamos para o elemento com esse ID
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null; // Não precisa renderizar nenhum elemento
}

export default ScrollToTop;
