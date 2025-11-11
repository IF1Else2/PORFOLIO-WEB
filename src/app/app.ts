import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLinkActive,RouterLink } from '@angular/router';


import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Projects } from './components/projects/projects';

@Component({
  selector: 'app-root',
    imports: [Projects,Home,About,Contact],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class App {
  protected readonly title = signal('mi-proyecto');
  
}
