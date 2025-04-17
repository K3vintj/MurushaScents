// Base de datos de productos (puedes cambiar esto por una API o base de datos real)
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const productoId = urlParams.get('id');

        const response = await fetch(`http://localhost:3000/productos/${productoId}`);
        const producto = await response.json();

        document.getElementById('producto-img').src = producto.imagen;
        document.getElementById('producto-nombre').textContent = producto.nombre;
        document.getElementById('producto-descripcion').textContent = producto.descripcion;
        document.getElementById('producto-precio').textContent = `$${producto.precio}`;
        document.getElementById('producto-stock').textContent = `Stock: ${producto.stock}`;
        document.getElementById('caracteristicas').textContent = producto.caracteristicas;
        document.getElementById('recomendaciones').textContent = producto.recomendaciones;
    } catch (error) {
        console.error('Error al cargar el producto:', error);
    }
});
