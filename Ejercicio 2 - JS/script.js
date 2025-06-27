// Arreglo con las frutas a mostrar
const frutas = ['manzana','banana','pera','durazno','frutilla','mango']

// Accedemos a los elementos del DOM
const palabra = document.getElementById('palabra')
const formulario = document.getElementById('formulario')
const error = document.getElementById('error')
const listaPalabras = document.getElementById('listaPalabras')

// Funcion mostrarFrutas
function mostrarFrutas(frutasMostrar) {
    // Limpiar la lista antes de agregar elementos
    listaPalabras.innerHTML = ''; 

    // Agregar las frutas a la lista
    frutasMostrar.forEach(palabra => {
        const li = document.createElement('li');
        li.textContent = palabra;
        listaPalabras.appendChild(li);
    });
}

// Llamamos a la funcion para mostrar todas las frutas
mostrarFrutas(frutas)

// Funcion para filtrar
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Convertimos la palabra ingresada a minusculas
    const palabraIngresada = palabra.value.toLowerCase();

    // Filtramos las frutas que contienen la palabra ingresada
    const palabrasFiltradas = frutas.filter(fruta => fruta.toLowerCase().includes(palabraIngresada));

    // Mostramos las frutas filtradas o un mensaje de error
    if (palabrasFiltradas.length === 0) {
        error.textContent = 'No se encontraron coincidencias';
    } else {
        mostrarFrutas(palabrasFiltradas);
        error.textContent = '';
    }
})
