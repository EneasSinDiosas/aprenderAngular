import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class AddCharacterComponent {

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0
  }

  saveCharacter (): void {
    if(this.character.name.length === 0) return;

    //*Implementamos el eventEmitter
    this.onNewCharacter.emit(this.character);

    //*Resetear el formularios
    this.character = {
      id: '',
      name: '',
      power: 0
    }
  }
}
