import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degreeCelsius'
})
export class DegreeCelsiusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var newsvalue = value +  " ℃" ; 
    console.dir('value:: ', value);
    return newsvalue;
  }

}
