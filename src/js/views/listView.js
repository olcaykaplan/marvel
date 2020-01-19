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
   let rowCount=1;
    let markup = ` <h2>gallery</h2>
    <div class="row col-12 odd">`;
    //console.log(items)
    items.forEach(function(val, i){
       
       if(i % 4 == 0 && i !== 0) 
        {
            
            markup += `</div>`;
            
            if(i !==20 )
            { 
                if(rowCount > 1 )   { markup += `<div class = "row col-12 pair">`;}
                else  {markup += `<div class = "row col-12 odd">`;}
            }
            rowCount == 4 ? rowCount = 2 :  rowCount++;
           
        }
        
        markup += `<div class="col-3 galleryImgDiv">
        <img class="img-fluid img-thumbnail" src="${val.img}" alt="${val.name}" data-id="${val.id}"> 
        </div>`;
    });
    
    //console.log(markup);
  elements.galleryImg.insertAdjacentHTML("afterbegin",markup);
}