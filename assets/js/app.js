// ANIMACIÓN SIMPLE

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.body.style.opacity = 0;

        setTimeout(() => {

            document.body.style.transition =
                "opacity 1s";

            document.body.style.opacity = 1;

        }, 100);
    }
);

// FORMULARIO

const form =
document.getElementById(
    "contactForm"
);

if (form) {

    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Mensaje enviado correctamente"
            );
        }
    );
}
