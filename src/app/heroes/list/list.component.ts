import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    public heroNames:string[]= ['Spiderman', 'Ironman', 'Hulk', 'Superman', 'Thor'];
    public heroeRemove?:string;

    removeLastHeroe(): void{
       this.heroeRemove = this.heroNames.pop();
    }
}
