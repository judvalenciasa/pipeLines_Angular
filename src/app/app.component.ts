import { Component } from '@angular/core';
import { PostService } from '../app/servicios/post.service';

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

  //SlicePipe
  animales:string[];
  minimo:number;
  maximo:number;

  // AsynPipe
  promesa:Promise<string>;
  promPromesa:Promise<any[]>;

  constructor(private postService:PostService) {
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
    this.animales = ['perro', 'gato', 'pajaro', 'gallina'];
    this.minimo = 0;
    this.maximo = this.animales.length-1;
    this.promesa= new Promise((resolve, reject) =>{
      setTimeout(() => resolve('se resueleve la promesa pasados 4 segundos'), 4000)
    });

    this.promPromesa= this.postService.getAll();
  }

  ngOnInit() {
    setInterval(() => this.fechaActual = new Date(), 1000);
  }



}
