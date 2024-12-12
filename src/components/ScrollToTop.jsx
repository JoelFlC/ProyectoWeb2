import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazamiento suave
    }, 50); // Apenas perceptible

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
