// URL de la API
const API_URL = "https://jsonplaceholder.typicode.com/todos";
// Donde mostraremos las tareas
const listaTareas = document.getElementById("listaTareas");

// Función para mostrar las tareas
function mostrarTareas(tareas) {
    listaTareas.innerHTML = ""; // Limpiamos la lista

    tareas.forEach(tarea => {
        const li = document.createElement("li");
        li.textContent = tarea.title; // Mostramos el título de la tarea
        listaTareas.appendChild(li);
    });
}

// Función para obtener y filtrar tareas
async function obtenerTareasCompletadas() {
    // Intentamos hacer la petición
    try {
        // 1. Hacemos la petición GET a la API
        const respuesta = await fetch(API_URL);
        const tareas = await respuesta.json();

        // 2. Filtramos solo las tareas completadas (completed: true)
        const tareasCompletadas = tareas.filter(tarea => tarea.completed === true);

        // 3. Mostramos las tareas en el HTML
        mostrarTareas(tareasCompletadas);
    } catch (error) { // En caso de error
        console.error("Error al obtener las tareas:", error);
    }
}

// Llamamos a la función al cargar la página
obtenerTareasCompletadas();