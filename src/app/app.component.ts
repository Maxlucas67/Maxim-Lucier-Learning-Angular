import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { NgIf, NgForOf } from '@angular/common';
import { User } from './models/user';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';
import { ShipmentListItemComponent } from './shipment-list-item/shipment-list-item.component';
import { ShipmentService} from './services/shipment.service';
import { Shipment} from './models/shipment.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, ShipmentListComponent, ShipmentListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Maxim-Lucier-Learning-Angular';
  name = 'Maxim Lucier';
  studentNum = '0844425';

  singleShipment: Shipment | undefined;

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit() {
  this.shipmentService.getShipmentById(103).subscribe((shipment) => {
    this.singleShipment = shipment;
  });
  }
}

