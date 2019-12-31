import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generateDash'
})
export class GenerateDashPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value){
      return value
    }
    else{
      return "-------"
    }
  }

}
