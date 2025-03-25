import { Component } from '@angular/core';
import { NoTaskComponent } from "./no-task/no-task.component";
import { CardSmallComponent } from "./card-small/card-small.component";
import { CardBigComponent } from "./card-big/card-big.component";

@Component({
  selector: 'app-board',
  imports: [NoTaskComponent, CardSmallComponent, CardBigComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

}
