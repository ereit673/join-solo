import { Component, Input } from '@angular/core';
import { SummaryComponent } from "./summary/summary.component";
import { AddTaskComponent } from "./add-task/add-task.component";

@Component({
  selector: 'app-main-section',
  imports: [SummaryComponent, AddTaskComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss',
})
export class MainSectionComponent {
  @Input({required: true}) section!: 'Summary' | 'AddTask' | 'Board' | 'Contacts';
}
