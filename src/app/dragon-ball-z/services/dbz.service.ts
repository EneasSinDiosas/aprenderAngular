import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power:500 },
    { id: uuid(), name: 'Goku', power: 8500 },
    { id: uuid(), name: 'Trunks', power: 500 },
  ];

  onNewCharacter(character: Character): void {

    const newCharacter: Character = {
      ...character,
      id: uuid(),
    }
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id: string): void {
    console.log('MAIN', id)
    //this.characters.splice(index, 1);
    this.characters = this.characters.filter((character) => character.id !== id)
  }
}
