import getData from "./getData.js";
import { showData,showDataPopulares } from "./showData.js";
import getDataPopulares from "./getData.js";

const endpoint = 'http://localhost:3000/posts';
const urlPopulares = 'http://localhost:3000/populares';

const element = document.querySelector('.products');
const populares = document.querySelector('.populares');

document.addEventListener('DOMContentLoaded', () => {

    const data = getData(endpoint);
     showData(data,element);

     const dataPopulares = getDataPopulares(urlPopulares)
     showDataPopulares(dataPopulares,populares);
})

    element.addEventListener('click', async(e) => {

     const btnDetail = e.target.classList.contains('card-img-top');
     const id = e.target.id;
        
     if(btnDetail){
          const lista = await getData(endpoint);
          const objeto = lista.find(list => list.id === Number(id))
            localStorage.setItem("Detail",JSON.stringify(objeto));
          window.location.href = "detail.html"
     }
     
    })

    populares.addEventListener('click', async(e) => {

        const btnDetail = e.target.classList.contains('card-img-top');
        const id = e.target.id;
           
        if(btnDetail){
             const lista = await getDataPopulares(urlPopulares);
             const objeto = lista.find(list => list.id === Number(id))
               localStorage.setItem("Populares",JSON.stringify(objeto));
             window.location.href = "detail.html"
        }
        
       })