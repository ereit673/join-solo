import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, DatePipe],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  dummy_contacts = ['name1', 'name2', 'name3'];
  selectedPriority = 'medium'; 
  showContacts = false;

  selectPriority(priority: string){
    this.selectedPriority = priority;
  }

  toggleShowContacts(){
    this.showContacts = !this.showContacts;
  }
}
