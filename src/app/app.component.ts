import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Maxim-Lucier-Learning-Angular';
  name = 'Maxim Lucier'
  studentNum = '0844425'
}

export interface login {
  name: string;
  phoneNum?: string;
  email: string;
  age: number;
  shippingAdress: string;
}
