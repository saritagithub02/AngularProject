import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'puresortArr'
})
export class PuresortArrPipe implements PipeTransform {

  transform(arr: any): any {
    return arr.sort((a:any,b:any)=>a-b);
  }

}
