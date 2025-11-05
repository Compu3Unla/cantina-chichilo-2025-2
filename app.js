document.addEventListener("DOMContentLoaded", () => {
      const intro = document.querySelector('.intro');
      const logoImg = document.getElementById('logoImg');

      console.log('DOMContentLoaded -> intro:', intro);

      const startFade = () => {
        console.log('Iniciando fade out.');
        intro.classList.add('fade-out');
      };

      if (logoImg) {
        if (logoImg.complete) {
          startFade();
        } else {
          logoImg.addEventListener('load', () => {
            console.log('Imagen cargada -> start fade');
            startFade();
          });
          logoImg.addEventListener('error', () => {
            console.warn('Error cargando la imagen; iniciando fade de todos modos');
            startFade();
          });
        }
      } else {
        startFade();
      }

      intro.addEventListener('transitionend', (e) => {
        if (e.propertyName === 'opacity') {
          console.log('Transition end (opacity). Eliminando intro del DOM.');
          intro.remove();
        }
      });

      setTimeout(() => {
        if (document.body.contains(intro)) {
          console.warn('Fallback: la intro aún existe; la eliminamos a la fuerza.');
          intro.remove();
        }
      }, 3000);
    });