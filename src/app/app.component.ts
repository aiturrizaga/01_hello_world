import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Valle Grande';

  counter: number = 0;
  message: string = '';

  constructor() {
    this.counter = 2;
  }

  increse() {
    this.message = '';
    this.counter++;
    if (this.counter === 5) {
      console.log('LLegaste a tu maximo!');
      alert('Llegaste a tu maximo!');
      this.message = 'Llegaste a tu maximo!';
    }
  }

  decrese() {
    this.message = '';
    this.counter--;
    if (this.counter === 0) {
      this.message = 'Se acabaron tus vidas!';
    }
  }
}
