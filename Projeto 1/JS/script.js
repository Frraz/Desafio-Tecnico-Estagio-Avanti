// Projeto 1 - E-commerce Avanti
// Busca do header, carrosséis de produtos (Swiper) e mega-menus.

document.addEventListener("DOMContentLoaded", function () {

    /* ----- Busca ----- */
    const formBusca = document.getElementById("form-busca");
    const campoBusca = document.getElementById("campo-busca");
    const resultadoBusca = document.getElementById("resultado-busca");

    formBusca.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const termo = campoBusca.value.trim();

        if (termo === "") {
            resultadoBusca.textContent = "";
            resultadoBusca.classList.remove("ativo");
            return;
        }

        resultadoBusca.textContent = `Você buscou por: '${termo}'`;
        resultadoBusca.classList.add("ativo");
    });

    /* ----- Carrosséis ----- */
    // Um Swiper por seção, cada um com suas próprias setas e paginação.
    document.querySelectorAll("[data-swiper]").forEach(function (swiperEl) {
        const carrossel = swiperEl.closest(".carrossel");

        new Swiper(swiperEl, {
            slidesPerView: 1,
            spaceBetween: 16,
            grabCursor: true,
            rewind: true, // no último slide, a seta "próximo" volta ao início
            navigation: {
                prevEl: carrossel.querySelector(".carrossel__seta--prev"),
                nextEl: carrossel.querySelector(".carrossel__seta--next"),
            },
            pagination: {
                el: carrossel.querySelector(".carrossel__paginacao"),
                clickable: true,
            },
            breakpoints: {
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1200: { slidesPerView: 5, spaceBetween: 19 },
            },
        });
    });

    /* ----- Mega-menus ----- */
    // No desktop abrem por hover (CSS). O clique cobre telas de toque;
    // clique fora ou Esc fecha tudo.
    const itensMegamenu = document.querySelectorAll(".tem-megamenu");

    function fecharMegamenus() {
        itensMegamenu.forEach(function (item) {
            item.classList.remove("aberto");
            item.querySelector("a, button").setAttribute("aria-expanded", "false");
        });
    }

    itensMegamenu.forEach(function (item) {
        const gatilho = item.querySelector("a, button");

        gatilho.addEventListener("click", function (evento) {
            evento.preventDefault();
            const estavaAberto = item.classList.contains("aberto");
            fecharMegamenus();
            if (!estavaAberto) {
                item.classList.add("aberto");
                gatilho.setAttribute("aria-expanded", "true");
            }
        });
    });

    document.addEventListener("click", function (evento) {
        const cliqueDentro = Array.from(itensMegamenu).some(function (item) {
            return item.contains(evento.target);
        });
        if (!cliqueDentro) {
            fecharMegamenus();
        }
    });

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape") {
            fecharMegamenus();
        }
    });

    /* ----- Newsletter ----- */
    // Sem backend: só evita o reload da página no submit.
    const formNewsletter = document.getElementById("form-newsletter");

    formNewsletter.addEventListener("submit", function (evento) {
        evento.preventDefault();
    });
});
