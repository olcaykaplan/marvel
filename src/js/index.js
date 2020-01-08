import Search from './models/Search';
import List from './models/List';
import * as listView from './views/listView';
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
//deneme first command
setUpThePage();