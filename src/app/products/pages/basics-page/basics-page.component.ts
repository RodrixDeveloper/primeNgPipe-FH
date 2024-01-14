import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  nameLower: string = 'rodrigo';
  nameUpper: string = 'RODRIGO';
  fullName: string = 'rOdRigO cHuqUimIA';

  customDate:Date = new Date ();
}
