import {elements} from './base.js';

export const renderRandomCoverImages = randomItems =>{

  
    let markup;
    randomItems.forEach(function(val,i){ 
        markup = ` 
                <div class="col-3 coverImagDiv">
                <img class="img-fluid img-thumbnail" src="${val.img}" alt="${val.name}" id="${val.id}">
                </div>
        `;
     
       elements.homeImgs.insertAdjacentHTML("afterbegin", markup);
    });


}

export const renderHeroesPhotosToGallery = items => {
    let markup = `<div class="row"> `;
    //console.log(items)
    items.forEach(function(val, i){
       
       if(i % 4 == 0 && i !== 0) 
        {
            
            markup += `</div>`;
            if(i !==20 ) markup += `<div class = "row"> `;
        }
        markup += `<div class="col-3 coverImagDiv">
        <img class="img-fluid img-thumbnail" src="${val.img}" alt="${val.name}" id="${val.id}">
        </div>`;
    });
    
    //console.log(markup);
  elements.galleryImg.insertAdjacentHTML("afterbegin",markup);
}