import '../css/componentes.css';
import webpacklogo from '../assets/img/webpack-logo.png';
//
export const saludar = (nombre) => {
  console.log('Creando etiqueta h1');
  const h1 = document.createElement('H1');
  h1.textContent = `Hola, ${nombre}!!!`;
  document.body.append(h1);
  const img = document.createElement('IMG');
  img.src = webpacklogo;
  document.body.append(img);
};
