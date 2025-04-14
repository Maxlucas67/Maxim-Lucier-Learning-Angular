import { Component } from '@angular/core';
import { Shipment } from '../models/shipment.model';
import { CommonModule } from '@angular/common';
import {ShipmentListItemComponent} from '../shipment-list-item/shipment-list-item.component';

@Component({
  selector: 'app-shipment-list',
  imports: [CommonModule, ShipmentListItemComponent],
  templateUrl: './shipment-list.component.html',
  standalone: true,
  styleUrl: './shipment-list.component.css'
})
export class ShipmentListComponent {
  shipments: Shipment[] = [
    {
      id: 101,
      senderName: 'Maxim Lucier',
      receiverName: 'Marg Lee',
      address: '1110 Fortworth',
      weight: 3.5,
      isFragile: true
    },
    {
      id: 102,
      senderName: 'Maxim Lucier',
      receiverName: 'Martin Lee',
      address: '1111 Fortworth',
      weight: 7.2
    },
    {
      id: 103,
      senderName: 'Maxim Lucier',
      receiverName: 'Mark Lee',
      address: '1112 Fortworth',
      weight: 15.0,
      isFragile: false
    },
    {
      id: 104,
      senderName: 'Maxim Lucier',
      receiverName: 'Matt Lee',
      address: '1113 Fortworth',
      weight: 10.8,
      isFragile: true
    }
  ];
}
