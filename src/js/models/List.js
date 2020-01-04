import { format } from "path"

export default class List{
 
    randomlyHomepageCoverImages(...results){
    
        var numberOfCharacter = results.lenght;
        let randomItems = [
         {
            id:this.id,
            name:this.name,
            img:this.img,
         }];
        let  number;
   
        for (var i= 0; i < 4; i++){
            number = Math.floor(Math.random()*20);
            if((!(randomItems.findIndex(x=> x.id === results[0][number].id) > -1) )&& results[0][number].thumbnail.path+'.jpg' !=='http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' && results[0][number].name !== "Aegis (Trey Rollins)")
            {
               randomItems[i] = {
                    id: results[0][number].id,
                    name: results[0][number].name,
                    img: results[0][number].thumbnail.path+'.jpg',
                };
            }
            else {
                i = i-1;
            }
        }
        return randomItems;
    }

}