import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //currencyPipe  
  precio: number;

  //DecimalPipe
  numero: number;

  //DatePipe
  fechaActual: Date;

  //PercentPipe
  numAleatorio: number;

  //jsonPipe
  estudiante:any;

  //Lower, Upper, Title
  texto:string;

  constructor() {
    this.precio = 28.234;
    this.numero = 3.8815253;
    this.fechaActual = new Date();
    this.numAleatorio = Math.random();
    this.estudiante={
      nombre:'Juan',
      apellidos:'Valencia',
      notas:[3,5,7]
    };
    this.texto = 'En un lugar del mundo'; 
  }

  ngOnInit() {
    setInterval(() => this.fechaActual = new Date(), 1000);
  }

}
