import Search from './models/Search';
import List from './models/List';
import * as listView from './views/listView';
import {elements} from './views/base';
const state = {};
 window.state = state;

const setUpThePage = async () => {
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
  
     state.search.getCharacterbyID(id);
     console.log(state.search.character);
};

//deneme first command
elements.galleryImg.addEventListener('click', e=>{
    const id = e.target.closest('.img-fluid').dataset.id;
    control(id);
});

setUpThePage();