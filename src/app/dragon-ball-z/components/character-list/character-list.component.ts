import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: false
})
export class CharacterListComponent {
  @Input() characterList: Character[] = [];

  onDeleteCharacter(index: number): void{
    //TODO Eliminar un personaje de la lista.
    console.log(index)
  }

}
