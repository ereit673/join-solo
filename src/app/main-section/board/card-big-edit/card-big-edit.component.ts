import { Component } from '@angular/core';

@Component({
  selector: 'app-card-big-edit',
  imports: [],
  templateUrl: './card-big-edit.component.html',
  styleUrl: './card-big-edit.component.scss'
})
export class CardBigEditComponent {
  selectedPriority = 'medium'; 
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
  showContacts = false;
  showCategories = false;

  selectPriority(priority: string){
    this.selectedPriority = priority;
  }

  toggleShowContacts(){
    this.showContacts = !this.showContacts;
  }

  toggleShowCategories(){
    this.showCategories = !this.showCategories;
  }
}
