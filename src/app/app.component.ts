import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Yuri Araújo - Sr. Developer';
  pageContent =
    "Hi, i'm Yuri Araújo, a Fullcycle Developer" +
    ' living in state of Rio de Janeiro Brazil, welcome to my page!';

  constructor() {}
}
