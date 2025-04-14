import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgForOf } from '@angular/common';
import { User } from './models/user';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, ShipmentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Maxim-Lucier-Learning-Angular';
  name = 'Maxim Lucier';
  studentNum = '0844425';

users: User[] = [
  {
    name: 'Marg Lee',
    phoneNum: 1234567890,
    email: 'Marg@gmail.com',
    age : 20,
    shippingAdress: '1110 Fortworth'
  },
  {
    name: 'Martin Lee',
    email: 'Martin@gmail.com',
    age : 21,
    shippingAdress: '1111 Fortworth'
  },
  {
    name: 'Mark Lee',
    phoneNum: 1234567890,
    email: 'Mark@gmail.com',
    age : 22,
    shippingAdress: '1112 Fortworth'
  },
  {
    name: 'Matt Lee',
    email: 'Matt@gmail.com',
    age : 23,
    shippingAdress: '1113 Fortworth'
  },
  {
    name: 'Pat Lee',
    phoneNum: 1234567890,
    email: 'Pat@gmail.com',
    age : 24,
    shippingAdress: '1114 Fortworth'
  },
  {
    name: 'Mike Lee',
    email: 'Mike@gmail.com',
    age : 25,
    shippingAdress: '1115 Fortworth'
  },
  {
    name: 'Francis Lee',
    phoneNum: 1234567890,
    email: 'Francis@gmail.com',
    age : 26,
    shippingAdress: '1116 Fortworth'
  }
];
}

