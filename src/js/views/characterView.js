import {elements} from './base.js';



export const setUpCharacterView  = item => {
    let markup = `
    <div class="row col-12 characterView">
           <div class="col-6 character"> 
               <img class="rounded" src="${item.img}" alt="${item.name}">
           </div>
           <div class="col-6 characterForm p-5">
               <div class="row  p-3 mx-auto">
                   <label for="">CHARACTER NAME</label>
                   <p>${item.name}</p>
               </div>
               <div class="row p-3 mx-auto">
                   <label for="">DESCRIPTION</label>
                   <p>${item.description}</p>
               </div>
               <div class="row p-3 mx-auto">
                   <label for="">COMICS </label>
                   <p>${item.comic}</p>
               </div>
               <div class="row p-3 mx-auto">
                   <label for="">SERIES</label>
                   <p>${item.series}</p>
               </div>
           </div>
       </div>
    `;

    elements.homeImgs.innerHTML = "";
    elements.galleryImg.innerHTML = "";
    elements.characterView.insertAdjacentHTML("afterbegin",markup);

};