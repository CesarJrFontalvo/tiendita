let url = "http://localhost:3001/posts";
let urlPopulares = "http://localhost:3001/populares"

let products = document.querySelector('.products');

//    Obtener los datos
const getPost = async (url) => {
    const resp = await fetch(url)
    const data = await resp.json()

    showPost(data);
}


// Lamado a la funcion
getPost(url)


// Mostrar los datos en la card
const showPost = (productos) => {
    products.innerHTML = ''

    productos.forEach(element => {
        const { nombre, imagen, precio, descuento } = element

        const productDiv = document.createElement('div')
        productDiv.classList.add('ul')

        productDiv.innerHTML = `
        <ul class="lst-groud">
        <li >

        <div class="card" id="card">

        <div class="product" id="product-card">
            <h6 class="porcentage">${descuento}% dto.</h6>
            <img src=${imagen} class="card-img-top" alt="...">
        </div>
            
       
        <div class="description">
            <p><strong>$${precio}/Kg </strong><span style="text-decoration:line-through;" style="color:rgb(241, 226, 226)" >39.9</span>/Kg.</p>
            <p>${nombre}</p>
        </div>
            <button type="button" class="btn-agregar">Agregar</button>
        </div>
        </li>
        </ul>
        `
        products.appendChild(productDiv)
    });
}


