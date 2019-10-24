import { Injectable } from "@angular/core";
import { CustomItem } from './section/customItem';
import { CustomRoof } from './section/customRoof';
import { TextComponent } from './section/text/text.component';


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DynamicComponentsService {



   result: CustomItem[] = [];


  createComponent(){

    let comp=TextComponent;
    let item=new CustomItem(comp,"Custom Component");
    this.result.push(item);
     return item;


  }

  getComponentList(){

    return this.result;
  }


}
