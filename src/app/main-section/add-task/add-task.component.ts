import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, DatePipe],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent{
  dummy_contacts = ['name1', 'name2', 'name3'];
  subtasks = [
    {description: 'subtask1',
      id: '1'
    },
    {description: 'subtask2',
      id: '2'
    },
    {description: 'subtask3',
      id: '3'
    },
    {description: 'subtask4',
      id: '4'
    }
  ];
  selectedPriority = 'medium'; 
  showContacts = false;
  showCategories = false;
  editingSubtask?: {[key: string]: boolean} = {
    '1': false,
    '2': false,
    '3': false,
    '4': false
  };

  selectPriority(priority: string){
    this.selectedPriority = priority;
  }

  toggleShowContacts(){
    this.showContacts = !this.showContacts;
  }

  toggleShowCategories(){
    this.showCategories = !this.showCategories;
  }

  toggleEditSubtask(subtaskId: string){
      this.editingSubtask![subtaskId] = !this.editingSubtask![subtaskId]; 
    
  }
}
