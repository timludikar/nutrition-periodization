import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'units'
})
export class UnitsPipe implements PipeTransform {

  transform(value: any, imperial: Boolean = false, measurement?: string): any {
    switch(measurement){
      case "height":
        return imperial ? value * 2.54 : value;
      case "weight":
        return imperial ? value / 2.2 : value;
      default:
        return null;
    }
  }

}
