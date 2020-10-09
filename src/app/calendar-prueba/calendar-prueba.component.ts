import { Component, OnInit, TemplateRef } from '@angular/core';
import{BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-calendar-prueba',
  templateUrl: './calendar-prueba.component.html',
  styleUrls: ['./calendar-prueba.component.css']
})
export class CalendarPruebaComponent implements OnInit {
  modalRef:BsModalRef;
  constructor(private modalService: BsModalService) { }
  userName= 'Gibran' ; //Manual, ya que no hay obtención de datos por falta de back
  ciudad = "Mexico City";
  err = "";
  datatime = [];
  ngOnInit(): void {
  }
  public openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
    fetch('//api.openweathermap.org/data/2.5/weather?q='+this.ciudad+'&appid=f4b3486ab93bfb6cfd70543aa750d789') //request de la API OPENWEATHERMAP
    .then(response => response.json()) .then(data => console.log(data)) 
    .catch(err => alert('No se puede obtener el tiempo')
    )
     window.alert('Se ha obtenido el clima');
  }

  save(): void {
    //no guarda por falta de api back
  }
  
}
