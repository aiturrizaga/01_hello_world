import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  newTask: string = '';

  tasks: any[] = [
    {
      id: 1,
      title: 'Realizar el maquetado en figma',
    },
    {
      id: 2,
      title: 'Maquetar el figma en HTML',
    },
    {
      id: 3,
      title: 'Desplegar el proyecto angular',
    },
  ];

  addTask(): void {
    console.log('Task: ', this.newTask);
    this.tasks.push({ id: 0, title: this.newTask });
  }

  deleteTask(task: any): void {
    const index = this.tasks.findIndex(t => t === task);
    this.tasks.splice(index, 1);
  }
}
