import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
  standalone: false
})

export class DragonBallMainPage {
  public characters: Character[] = [
    { name: 'Krillin', power: 450 },
    { name: 'Goku', power: 8500 },
    { name: 'Trunks', power: 500 },
  ];

  onNewCharacter(character: Character): void {
    console.log('MAIN', character)
    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    console.log('MAIN', index)
    this.characters.splice(index, 1);
  }
}
