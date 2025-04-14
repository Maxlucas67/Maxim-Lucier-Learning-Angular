import { Component, Input } from '@angular/core';
import { Shipment} from '../models/shipment-list';

@Component({
  selector: 'app-shipment-list-item',
  imports: [],
  templateUrl: './shipment-list-item.component.html',
  styleUrl: './shipment-list-item.component.css'
})
export class ShipmentListItemComponent {
  @Input() shipment!: Shipment;
}
