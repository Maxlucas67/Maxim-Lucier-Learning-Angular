import {Component, OnInit} from '@angular/core';
import { Shipment } from '../models/shipment.model';
import { CommonModule } from '@angular/common';
import {ShipmentListItemComponent} from '../shipment-list-item/shipment-list-item.component';
import {ShipmentService} from '../services/shipment.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-shipment-list',
  imports: [CommonModule, ShipmentListItemComponent, RouterLink],
  templateUrl: './shipment-list.component.html',
  standalone: true,
  styleUrl: './shipment-list.component.css'
})

export class ShipmentListComponent implements OnInit {
  shipments: Shipment[] = [];

  constructor(
    private shipmentService: ShipmentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadShipments();
  }

  loadShipments() {
    this.shipmentService.getShipments().subscribe((data) => {
      this.shipments = data;
    });
  }

  deleteShipment(id: number) {
    this.shipmentService.deleteShipment(id);
    this.loadShipments();
  }
  editShipment(id: number) {
    this.router.navigate(['/modify', id]);
  }
}




