export const showData = async(list,element) => {
    const products = await list;

    products.forEach(product => {
        const {id,nombre,imagen, descuento,precio} = product;
        element.innerHTML += `
      
       <li>

        <div class="card" id="card">

        <div class="product" id="product-card">
            <h6 class="porcentage">${descuento}% dto.</h6>
            <img src=${imagen} id=${id} class="card-img-top" alt="...">
        </div>
            
       
        <div class="description">
            <p><strong>$${precio}/Kg </strong><span style="text-decoration:line-through;" style="color:rgb(241, 226, 226)" >39.9</span>/Kg.</p>
            <p>${nombre}</p>
        </div>
            <button type="button" class="btn-agregar" >Agregar</button>
        </div>
        </li>
       
        `
    })
}
export const showDataPopulares = async(list,element) => {
    const populares = await list;

    populares.forEach(producto => {
        const {id,nombre,imagen, precio} = producto;
        element.innerHTML += `
      
       <li>
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
     
       
        </li>
       
       
        `
    })
}
