import { Component, Input } from '@angular/core';
import { Shipment } from '../models/shipment.model';
import {NgIf, NgClass, CurrencyPipe, DatePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-shipment-list-item',
  imports: [NgIf, NgClass, CurrencyPipe, DatePipe, UpperCasePipe],
  templateUrl: './shipment-list-item.component.html',
  standalone: true,
  styleUrl: './shipment-list-item.component.css'
})
export class ShipmentListItemComponent {
  @Input() shipment!: Shipment;
  @Input() index!: number;
  isEven(): boolean {
    return this.index % 2 === 0;
  }
}
