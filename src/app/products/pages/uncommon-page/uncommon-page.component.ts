import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  /**
   * i18Select
   */

  name: string = 'Rodrigo';
  gender: 'male' | 'female' = 'male';
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Adriana';
    this.gender = 'female';
  }

  /**
   * i18Plural = Funciona bien con numeros
   */

  cliens: string[] = ['Rodrigo', 'Pedro', 'Adriana', 'Manelyk', 'Cristian'];
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.cliens.shift();
  }

  /**
   * keyValue Pipe = recorrer un objeto como si fuera un array
   */

  person = {
    name: 'Rodrigo',
    age: 28,
    address: 'La Paz , Bolivia',
  };

  /**
   * Async pipe
   */

  myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Otro nombre';
    }, 3500);
  });
}
