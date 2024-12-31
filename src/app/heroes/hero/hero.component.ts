import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalicedName() : string {
    return this.name.toUpperCase();
  }

  setName(newName: string): void {
    this.name = newName;
  }

  setAge(newAge: number): void {
    this.age = newAge;
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

}
