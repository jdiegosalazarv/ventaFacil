import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Servicio } from 'src/app/models/servicio.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos:Product[];
  contador:number = 0;

  constructor() {
    this.productos = [];
  }

  ngOnInit(): void {
    for(let i = 0; i < 10; i++){
      this.contador++;
      this.productos.push(new Product(`articulo`,this.contador*10,`marca${this.contador}`, `modelo${this.contador}`, `codigo${this.contador}`,
      `nombre${this.contador}`, `descripcion${this.contador}`, new Date('2023-01-31')));
    }
  }

}
