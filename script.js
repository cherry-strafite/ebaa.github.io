// ============================
// FORMULÁRIO DE CONTATO
// ============================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        alert(
            `Valeu, ${name}! 🚀\n\nSua mensagem foi enviada com sucesso!`
        );

        form.reset();

    });

}


// ============================
// ANIMAÇÃO AO ENTRAR NA PÁGINA
// ============================

document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .6s ease";

        document.body.style.opacity = "1";

    }, 100);

});
