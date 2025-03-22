import { Component } from '@angular/core';
import { NoTaskComponent } from "./no-task/no-task.component";
import { CardSmallComponent } from "./card-small/card-small.component";

@Component({
  selector: 'app-board',
  imports: [NoTaskComponent, CardSmallComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

}
