import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio.model';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios:Servicio[];
  contador:number = 0;

  constructor() {
    this.servicios = [];
   }

  ngOnInit(): void {
    for(let i = 0; i < 10; i++){
      this.contador++;

      this.servicios.push(new Servicio(`servicio`,this.contador*10, `codigo${this.contador}`,`nombre${this.contador}`, `descripcion${this.contador}`,
      new Date('2023-01-31'), 'metro', 'semanal'));
    }
  }

}
