import {Component, OnInit} from '@angular/core';
import { Shipment } from '../models/shipment.model';
import { CommonModule } from '@angular/common';
import {ShipmentListItemComponent} from '../shipment-list-item/shipment-list-item.component';
import {ShipmentService} from '../services/shipment.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-shipment-list',
  imports: [CommonModule, ShipmentListItemComponent, RouterLink],
  templateUrl: './shipment-list.component.html',
  standalone: true,
  styleUrl: './shipment-list.component.css'
})

export class ShipmentListComponent implements OnInit {

  deleteShipment(id: number): void {
  this.shipmentService.deleteShipment(id).subscribe(() => {
    this.shipmentService.getShipments().subscribe(data => {
      this.shipments = data;
    });
  });
}
  shipments: Shipment[] = [];

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit() {
    this.shipmentService.getShipments().subscribe((data) => {
      this.shipments = data;
    });
  }
}



