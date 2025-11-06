//intro-index

localStorage.removeItem("introShown");

const intro = document.querySelector(".intro");
const introShown = localStorage.getItem("introShown");

  if (!introShown) {

setTimeout(() => {
    intro.classList.add("fade-out");

setTimeout(() => {
    intro.style.display = "none";
    contenido.style.display = "block";
    document.body.style.overflow = "auto";
    localStorage.setItem("introShown", "true");
    }, 1000);
    }, 3500);
  } else {

    intro.style.display = "none";
    document.body.style.overflow = "auto";
  }

//menu-acordeon

const btn = document.querySelector('.accordion_btn_entradas');
        const content = document.querySelector('.accordion_content_entradas');

        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';


            btn.setAttribute('aria-expanded', !expanded);
            content.classList.toggle('show');


            if (expanded) {
                content.style.maxHeight = '0';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });

const btn2 = document.querySelector('.accordion_btn_minutas');
const content2 = document.querySelector('.accordion_content_minutas');
        btn2.addEventListener('click', () => {
            const expanded2 = btn2.getAttribute('aria-expanded') === 'true';


            btn2.setAttribute('aria-expanded', !expanded2);
            content2.classList.toggle('show');


            if (expanded2) {
                content2.style.maxHeight = '0';
            } else {
                content2.style.maxHeight = content2.scrollHeight + 'px';
            }
 });

const btn3 = document.querySelector('.accordion_btn_postres');
const content3 = document.querySelector('.accordion_content_postres');
        btn3.addEventListener('click', () => {
            const expanded3 = btn3.getAttribute('aria-expanded') === 'true';


            btn3.setAttribute('aria-expanded', !expanded3);
            content3.classList.toggle('show');

            if (expanded3) {
                content3.style.maxHeight = '0';
            } else {
                content3.style.maxHeight = content3.scrollHeight + 'px';
            }
        });

        const btn4 = document.querySelector('.accordion_btn_pastas');
        const content4 = document.querySelector('.accordion_content_pastas');
        btn4.addEventListener('click', () => {
            const expanded4 = btn4.getAttribute('aria-expanded') === 'true';

            btn4.setAttribute('aria-expanded', !expanded4);
            content4.classList.toggle('show');

            if (expanded4) {
                content4.style.maxHeight = '0';
            } else {
                content4.style.maxHeight = content4.scrollHeight + 'px';
            }
        });

        const btn5 = document.querySelector('.accordion_btn_mariscos');
        const content5 = document.querySelector('.accordion_content_mariscos');
        btn5.addEventListener('click', () => {
            const expanded5 = btn5.getAttribute('aria-expanded') === 'true';

            btn5.setAttribute('aria-expanded', !expanded5);
            content5.classList.toggle('show');

            if (expanded5) {
                content5.style.maxHeight = '0';
            } else {
                content5.style.maxHeight = content5.scrollHeight + 'px';
            }
        });
        const btn6 = document.querySelector('.accordion_btn_bebidas');
        const content6 = document.querySelector('.accordion_content_bebidas');
        btn6.addEventListener('click', () => {
            const expanded6 = btn6.getAttribute('aria-expanded') === 'true';

            btn6.setAttribute('aria-expanded', !expanded6);
            content6.classList.toggle('show');

            if (expanded6) {
                content6.style.maxHeight = '0';
            } else {
                content6.style.maxHeight = content6.scrollHeight + 'px';
            }
        });


//nosotros - galeria

window.onload = () => {
  window.app = new App();
};


function cambiarDisplay(idGaleria, visibilidadNueva) {
  document.getElementById(idGaleria).style.display = visibilidadNueva;
}

function mostrarGaleria(tipo) {
  cambiarDisplay("galeria" + tipo, "flex");
}

function ocultarGaleria(tipo) {
  cambiarDisplay("galeria" + tipo, "none");
}