import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName= 'Gibran' ; //Manual ya que no hay obtención de datos por falta de back
  title = 'prueba-calendario';
}
