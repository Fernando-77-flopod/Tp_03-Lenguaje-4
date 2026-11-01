// Referencias a los elementos del DOM
const btnSubir = document.getElementById("btnSubir");
const inputArchivo = document.getElementById("inputArchivo");
const infoSeccion = document.getElementById("infoSeccion");
const nombreArchivo = document.getElementById("nombreArchivo");
const tipoArchivo = document.getElementById("tipoArchivo");
const tamanoArchivo = document.getElementById("tamanoArchivo");
const preview = document.getElementById("preview");

// Evento click del botón: abre el explorador de archivos
btnSubir.addEventListener("click", () => {
    inputArchivo.click();
});

// Evento change: se ejecuta cuando el usuario selecciona un archivo
inputArchivo.addEventListener("change", (evento) => {
    const archivo = evento.target.files[0];

    // Validamos que se haya seleccionado un archivo
    if (!archivo) return;

    // Validamos que sea una imagen
    if (!archivo.type.startsWith("image/")) {
        alert("Por favor, seleccione un archivo de imagen válido.");
        return;
    }

    // Mostramos la información del archivo
    nombreArchivo.textContent = archivo.name;
    tipoArchivo.textContent = archivo.type;
    tamanoArchivo.textContent = archivo.size;

    // Creamos una URL temporal para mostrar la vista previa
    const urlImagen = URL.createObjectURL(archivo);
    preview.src = urlImagen;
    preview.style.display = "block";

    // Mostramos la sección de información
    infoSeccion.style.display = "block";
});