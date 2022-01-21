const products = document.querySelector('.products');
const populares = document.querySelector('.populares');

const getLocalStorage = () => {
   const det = JSON.parse(localStorage.getItem("Detail"));
   const {nombre,imagen,precio,descuento,descripcion } = det;
   products.innerHTML += `
      
   <li>

    <div class="card" id="card">

    <div class="product" id="product-card">
        <h6 class="porcentage">${descuento}% dto.</h6>
        <img src=${imagen}  class="card-img-top" alt="...">
    </div>
        
   
    <div class="description">
        <p><strong>$${precio}/Kg </strong><span style="text-decoration:line-through;" style="color:rgb(241, 226, 226)" >39.9</span>/Kg.</p>
        <p>${nombre}</p>
    </div>
        <button type="button" class="btn-agregar" >Agregar</button>
    </div>
    </li>
    <li>
    </div>
    <h6 class="porcentage">Descripción del producto</h6>
    <hr><p>${descripcion}</p>
     <p>${descripcion}</p>
     <p>${descripcion}</p>
 </div></li>
    `
}

const getLocalStoragePopulares = () => {
    const det = JSON.parse(localStorage.getItem("Populares"));
    const {nombre,imagen,precio,descripcion} = det;
    populares.innerHTML += `
       
    <li>
 
     <div class="card" id="card">
 
     <div class="product" id="product-card">
        
         <img src=${imagen}  class="card-img-top" alt="...">
     </div>
         
    
     <div class="description">
         <p><strong>$${precio}/Kg </strong><span style="text-decoration:line-through;" style="color:rgb(241, 226, 226)" >39.9</span>/Kg.</p>
         <p>${nombre}</p>
     </div>
         <button type="button" class="btn-agregar" >Agregar</button>
     </div>
     </li>
     </div>
     <p>${descripcion}</p>
 </div>
     `
 }

document.addEventListener('DOMContentLoaded', getLocalStorage,getLocalStoragePopulares)

products.addEventListener('click', (e) => {

    if(e.target.classList.contains('btn-agregar')){
        window.location.href = "index.html";
    }
 
})