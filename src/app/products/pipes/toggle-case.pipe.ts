import { Pipe, PipeTransform } from '@angular/core';

// rodrigo | toggleCase = 'RODRIGO'
// RODRIGO | toggleCase = 'rodrigo'

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  //   transform(value: string, toUpper: boolean): string {
  transform(value: string, toUpper: boolean = false): string {  //por defecto si no me manda el argumento sera false
    console.log(toUpper);
    console.log(value);

    return toUpper ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
  }
}
