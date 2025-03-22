import { Component } from '@angular/core';
import { NoTaskComponent } from "./no-task/no-task.component";

@Component({
  selector: 'app-board',
  imports: [NoTaskComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

}
