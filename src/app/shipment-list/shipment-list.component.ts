import { Component } from '@angular/core';
import { Shipment } from '../models/shipment.model';
import { CommonModule } from '@angular/common';
import {ShipmentListItemComponent} from '../shipment-list-item/shipment-list-item.component';
import {ShipmentService} from '../services/shipment.service';

@Component({
  selector: 'app-shipment-list',
  imports: [CommonModule, ShipmentListItemComponent],
  templateUrl: './shipment-list.component.html',
  standalone: true,
  styleUrl: './shipment-list.component.css'
})
export class ShipmentListComponent {
  shipments: Shipment[] = [];

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit() {
    this.shipments = this.shipmentService.getShipments();
  }
  }
