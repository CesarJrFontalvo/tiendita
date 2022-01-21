const url = 'http://localhost:3000/posts';
const urlPopulares = 'http://localhost:3000/populares';

let products = document.querySelector('.products');
let populares = document.querySelector('.populares');



//    Obtener los datos
const getPost = async (url) => {
    const resp = await fetch(url)
    const data = await resp.json()
   
    showPost(data);
}
const getPostPopurales = async (urlPopulares) => {
    const resp = await fetch(urlPopulares)
    const data = await resp.json()

    showPostPopulares(data);
}


// Lamado a la funcion
getPost(url)
// console.log(getPost(url)
 getPostPopurales(urlPopulares)



// Mostrar los datos en la card

// Product
const showPost = (productos) => {
    products.innerHTML = ''

    productos.forEach(element => {
        const { nombre, imagen, precio, descuento, id } = element

        const productDiv = document.createElement('div')
        productDiv.classList.add('li')

        productDiv.innerHTML = `
      
       

        <div class="card" id="card">

        <div class="product" id="product-card">
            <h6 class="porcentage">${descuento}% dto.</h6>
            <img src=${imagen}  class="card-img-top" alt="...">
        </div>
            
       
        <div class="description">
            <p><strong>$${precio}/Kg </strong><span style="text-decoration:line-through;" style="color:rgb(241, 226, 226)" >39.9</span>/Kg.</p>
            <p>${nombre}</p>
        </div>
            <button type="button" class="btn-agregar" id=${id}>Agregar</button>
        </div>
    
       
        `
        products.appendChild(productDiv)
    });
}

// populares
const showPostPopulares = (productos) => {
    populares.innerHTML = ''

    productos.forEach(element => {
        const { nombre, imagen, precio, descuento, id } = element

        const productDiv = document.createElement('div')
        productDiv.classList.add('li')

        productDiv.innerHTML = `
      
        <div class="card" id="card">

        <div class="product" id="product-card">
            
            <img src=${imagen}  class="card-img-top" alt="...">
        </div>
            
       
        <div class="description">
            <p><strong>$${precio}/Kg </strong></p>
            <p>${nombre}</p>
            <span " style="color:rgb(241, 226, 226)" >250 g($0.25/gr)</span>
        </div>
            <button type="button" class="btn-agregar " id=${id}>Agregar</button>
        </div>
      
        `
        populares.appendChild(productDiv)
    });
}





products.addEventListener('click', async (e) => {

    const btnDetail = e.target.classList.contains('btn-agregar');
    const id = e.target.id;
 

    if (btnDetail) {
        // const lista = await getPost(url);
        // const objeto =lista(list => list.id === Number(id))
      

        //   localStorage.setItem("Detail",JSON.stringify(objeto));
          window.location.href = "detail.html"
    }
})

// card.addEventListener('click', async(e) => {

//     const btnDetail = e.target.classList.contains('card-img-top');
//     const id = e.target.id;

//     if(btnDetail){
//         //  const lista = await getData(endpoint);
//         //  const objeto = lista.find(list => list.id === Number(id))
//         //  localStorage.setItem("Detail",JSON.stringify(objeto));
//          window.location.href = "detail.html"
//     }
// })