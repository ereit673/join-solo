import { Component } from '@angular/core';
import { CardBigWrapperComponent } from "../shared/card-big-wrapper/card-big-wrapper.component";
import { CardBigEditComponent } from "../card-big-edit/card-big-edit.component";

@Component({
  selector: 'app-card-big',
  imports: [CardBigWrapperComponent, CardBigEditComponent],
  templateUrl: './card-big.component.html',
  styleUrl: './card-big.component.scss'
})
export class CardBigComponent {

}
