import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Contador: {{contador}}</p>

    <button (click)="increaseBy(+1)">+ 1</button>
    <button (click)="increaseBy(-1)">- 1</button>
    <button (click)="reset()">reset</button>
  `

})

export class CounterComponent {
  constructor() { }

  public contador: number = 0;

  increaseBy(value : number):void {
    this.contador +=value;
  }

  reset():void{
    this.contador=0;
  }

}
