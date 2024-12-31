import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Black Widow', 'Captain America']
  public lastDeletedHero: string | undefined ='';

  removeLastHero():void{
     this.lastDeletedHero = this.heroNames.pop();
  }

}
