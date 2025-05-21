function iniciar() {
    var boton = document.getElementById('guardar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
}

function nuevoitem() {
    var clave = document.getElementById('clave').value;
    var valor = document.getElementById('texto').value;
    if (clave.trim() !== "") {
        localStorage.setItem("storage_" + clave, valor);
    }
    mostrar();
    document.getElementById('clave').value = '';
    document.getElementById('texto').value = '';
}

function mostrar() {
    var cajadatos = document.getElementById('caja');
    cajadatos.innerHTML = '';
    var hayDatos = false;
    for (var f = 0; f < localStorage.length; f++) {
        var clave = localStorage.key(f);
        if (clave.startsWith("storage_")) {
            var valor = localStorage.getItem(clave);
            cajadatos.innerHTML += '<div>' + clave.replace("storage_", "") + ' - ' + valor + '</div>';
            hayDatos = true;
        }
    }
    if (!hayDatos) {
        cajadatos.innerHTML = 'No hay información disponible';
    }
}

window.addEventListener('load', iniciar, false);
