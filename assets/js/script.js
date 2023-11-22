let carrito = [];
let total = 0;

function mostrarCarrito() {
    let carritoDiv = document.getElementById('carrito');
    carritoDiv.classList.toggle('oculto');
}

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById('lista-carrito');
    let totalCarrito = document.getElementById('total-carrito');

    listaCarrito.innerHTML = '';
    total = 0;

    carrito.forEach((item, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;

        // Botón para eliminar el curso del carrito
        let eliminarButton = document.createElement('button');
        eliminarButton.textContent = 'Eliminar';
        eliminarButton.onclick = () => eliminarDelCarrito(index);

        listItem.appendChild(eliminarButton);
        listaCarrito.appendChild(listItem);
        total += item.precio;
    });

    totalCarrito.textContent = total.toFixed(2);
}
function pagarAhora() {
    alert('¡Gracias por tu compra!');

    carrito = [];
    actualizarCarrito();
}



