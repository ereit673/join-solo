import { Component } from '@angular/core';
import { SummaryComponent } from "./summary/summary.component";

@Component({
  selector: 'app-main-section',
  imports: [SummaryComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss',
})
export class MainSectionComponent {
  section: 'Summary' | 'AddTask' | 'Board' | 'Contacts' = 'Summary';
}
