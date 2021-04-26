import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitallize'
})
export class CapitallizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    //if(typeof value === 'string'){
    //  const palabras = value.split(' ');
    //  const arrTemp = [];
    //  for(let palabra of palabras){
    //    arrTemp.push(palabra[0].toUpperCase() +  palabra.slice(1).toLowerCase());
    //  }
    //  return arrTemp.join(' ');
    //}
    //return null;

    if(typeof value == 'string'){
      return value
      .split(' ')
      .map(palabra => palabra[0].toUpperCase() + palabra.slice(1).toLowerCase())
      .join(' ');
    }
  }

}
