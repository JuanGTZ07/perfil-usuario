let nombre = document.getElementById("nombre");
let ocupacion = document.getElementById("ocupacion");
let card = document.querySelector(".perfil-card");
card.addEventListener("click", cambio);

function cambio() {
    if (nombre.textContent.trim() === "Mariano") {
        nombre.textContent = "Mariana";
        ocupacion.textContent = "Doctora";
    }
    else {
        nombre.textContent = "Mariano";
        ocupacion.textContent = "Doctor";
    }

    alert("Cambios realizados");
}
