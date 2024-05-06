import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // template: ` <h1> Hola, este es un ejemplo de {{ title }}</h1> 
  //   <app-user />
  // `,
  // styles: `
  //   h1{
  //     color: white; 
  //   }
  // `,
})
export class AppComponent {
  title = 'angular-17-app';
}
