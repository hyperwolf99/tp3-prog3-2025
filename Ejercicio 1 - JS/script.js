// Cargar elementos
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const operacion = document.getElementById("operacion");
const calcular = document.getElementById("calcular");

// Eventos
calcular.addEventListener("click", (e) => {
    e.preventDefault();

    const op = operacion.value;
    const num1 = Number(numero1.value);
    const num2 = Number(numero2.value);

    if (op === "a") {
        alert("Debes seleccionar una operacion");
        return;
    }

    if (op === "sumar") {
        alert(`El resultado es: ${num1 + num2}`);
    } else if (op === "restar") {
        alert(`El resultado es: ${num1 - num2}`);
    } else if (op === "multiplicar") {
        alert(`El resultado es: ${num1 * num2}`);
    } else if (op === "dividir" && num2 !== 0) {
        alert(`El resultado es: ${(num1 / num2).toFixed(2)}`);
    }
    // Limpiar
    numero1.value = "";
    numero2.value = "";
    calcular.disabled = false;
    operacion.value = "a";
});

// Función para actualizar el estado del boton
function actualizarBoton() {
    const op = operacion.value;
    const num2 = Number(numero2.value);
    if (op === "dividir" && num2 === 0) {
        calcular.disabled = true;
    } else {
        calcular.disabled = false;
    }
}

operacion.addEventListener("change", actualizarBoton);
numero2.addEventListener("input", actualizarBoton);