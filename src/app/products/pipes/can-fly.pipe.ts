import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  // transform(value: boolean): string {
  transform(value: boolean): 'VUELA'| 'NO VUELA' {  //otra manera de tiparlo mas exacto pero de ambas maneras funciona
    console.log(value);
    return value ? 'VUELA' : 'NO VUELA';
  }
}
