import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let decimal: number = !args ? 0 : args;
    return value.toFixed(decimal)
  }

}
