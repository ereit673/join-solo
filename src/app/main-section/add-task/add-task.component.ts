import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, DatePipe],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  

}
