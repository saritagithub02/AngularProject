import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impuresortArr',
  pure:false
})
export class ImpuresortArrPipe implements PipeTransform {

  transform(arr:any): any {
    return arr.sort((a:any,b:any)=>a-b);
  }

}
