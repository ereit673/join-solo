import { Component, Input } from '@angular/core';
import { SummaryComponent } from "./summary/summary.component";

@Component({
  selector: 'app-main-section',
  imports: [SummaryComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss',
})
export class MainSectionComponent {
  @Input({required: true}) section!: 'Summary' | 'AddTask' | 'Board' | 'Contacts';
}
