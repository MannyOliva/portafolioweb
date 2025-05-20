function mostrarResultados(event) {
    event.preventDefault();
    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var porcentaje = parseFloat(document.getElementById("porcentaje").value);

    if (isNaN(subtotal) || isNaN(porcentaje)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa valores válidos.";
        return;
    }

    var propina = (subtotal * porcentaje) / 100;
    var total = subtotal + propina;

    document.getElementById("resultado").innerHTML =
        `<strong>Propina sugerida:</strong> $${propina.toFixed(2)}<br>
         <strong>Total a pagar:</strong> $${total.toFixed(2)}`;
}