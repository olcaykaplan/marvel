import Search from './models/Search';
import List from './models/List';
import * as listView from './views/listView';
import * as characterView from './views/characterView';

import {elements} from './views/base';
const state = {};
 window.state = state;

const setUpHomePage = async () => {
    try {
         state.search = new Search();
         await state.search.getResult();
         state.list = new List();
         
        var randomItems =  state.list.randomlyHomepageCoverImages(state.search.result)
        
        listView.renderRandomCoverImages(randomItems);
        listView.renderHeroesPhotosToGallery(state.search.filteredResult)
        } catch (error) {
        console.log(error);
    }
 };

const control = async (id) => {
  
     await state.search.getCharacterbyID(id);
    
     characterView.setUpCharacterView(state.search.character);
};

elements.galleryImg.addEventListener('click', e=>{
    //characterView.openCharacterViewPage();
     const id = e.target.closest('.img-fluid').dataset.id;
     control(id);
});
// elements..addEventListener('click', e=>{
//     //characterView.openCharacterViewPage();
//      const id = e.target.closest('.img-fluid').dataset.id;
//      control(id);
// });
setUpHomePage();