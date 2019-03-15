import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quote'
})
export class QuotePipe implements PipeTransform {

  transform(value: any, args?: any): any {
 
   var newsvalue = value.replace(/&quot;/g,'"'); 
    console.log('pipe:: ',newsvalue)
    return newsvalue;
  }

}
