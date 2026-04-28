const swiperGaleria = new Swiper('.swiper-galeria', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: { slidesPerView: 3 }
    }
});


const swiperDepoimentos = new Swiper('.swiper-depoimentos', {
    slidesPerView: 1, 
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedback-form');
    const statusMessage = document.getElementById('status-message');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (e) {
            e.preventDefault();

           
            const nome = document.getElementById('client-name').value;
            const mensagem = document.getElementById('client-message').value;

            
            console.log("Recebido:", nome, mensagem);

            
            feedbackForm.style.opacity = '0.5';
            feedbackForm.style.pointerEvents = 'none';

            
            setTimeout(() => {
                feedbackForm.reset(); 
                feedbackForm.classList.add('hidden'); 

                if (statusMessage) {
                    statusMessage.classList.remove('hidden');
                    statusMessage.style.display = 'block'; 
                    statusMessage.innerHTML = `<h3>Gratidão, ${nome}!</h3><p>Seu depoimento foi enviado com sucesso.</p>`;
                }
            }, 800);
        });
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});