document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3000/productos');
        const productos = await response.json();
        const listaProductos = document.getElementById('lista-productos');

        productos.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('product');
            div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio}</p>
                <a href="producto.html?id=${producto.id}" class="btn">Ver más</a>
            `;
            listaProductos.appendChild(div);
        });
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
});
