import axios from 'axios'

import {publicKey, privateKey, apiKeyForGif} from '../cofig';

export default class Search{

    async getResult(){
           
           const res = await axios (`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${privateKey}`);
           
            this.result = res.data.data.results;
            this.filteredResult = this.filterResult(this.result);
            console.log()
            //filteredresult promise düşüyor.
    }
    
     async filterResult(...results)
    {
        //<img id="currentPhoto" src="SomeImage.jpg" onerror="this.onerror=null; this.src='Default.jpg'" alt="" width="100" height="120">

     let heros = [];
     //window.h = heros;
     //console.log(results[0][3].thumbnail.path)
     let imgNotFoundCount = results[0].filter(word => word.thumbnail.path == `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available`).length;
     this.gifyResult = await this.gify(imgNotFoundCount);
     let count=0;
     //console.log(this.gifyResult[0].images.original.url);  
     results[0].forEach( (val) =>  {   
        // [""0""].images.original.url
       if(val.thumbnail.path == `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available` )
       {
         //  console.log(this.gifyResult[count].images.original.url)
            heros.push({
            id: val.id,
            name: val.name,
            img: this.gifyResult[count].images.original.url,
             });
        count++;
       }
     else{   
        heros.push({
                id: val.id,
                name: val.name,
                img: val.thumbnail.path+'.jpg'
            });
        }
    });
    return heros;
    }
    async gify(imgNotFoundCount){
    const resGif = await axios (`http://api.giphy.com/v1/gifs/search?q=not+found&api_key=${apiKeyForGif}&limit=${imgNotFoundCount}`);
      let result = resGif.data.data;
      //console.log(result);
      return result;
      
 }
    
}