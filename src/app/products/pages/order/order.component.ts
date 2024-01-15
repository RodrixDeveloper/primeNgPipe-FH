import { Component } from '@angular/core';
import { Color, Hero } from '../../interface/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  isUpperCase: boolean = false;
  // orderBy: keyof Hero | undefined | '' = '';  //otra manera
  orderBy?: keyof Hero;

  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Thor',
      canFly: true,
      color: Color.red,
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase; //si esta en true = false ; si esta en false = true  (viceversa)
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }
}
