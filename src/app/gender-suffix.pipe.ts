import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderSuffix'
})
export class GenderSuffixPipe implements PipeTransform {

  transform(name: any,  emp?:any): unknown {  
    let gender= emp.gender;
    if(gender=="male"){return "Mr "+ name;}
    else return "Mrs "+ name;   
  }

}
