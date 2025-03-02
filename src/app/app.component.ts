import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { MainSectionComponent } from "./main-section/main-section.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SideNavComponent, MainSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  section: 'Summary' | 'AddTask' | 'Board' | 'Contacts' = 'Summary';
}
