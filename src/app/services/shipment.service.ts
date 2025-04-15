import { Injectable } from '@angular/core';
import { Shipment} from '../models/shipment.model';
import { MOCK_SHIPMENTS} from '../data/mock-content';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private shipments = MOCK_SHIPMENTS;

  getShipments(): Observable<Shipment[]> {
    return of(this.shipments);
  }

  addShipments(shipment: Shipment): void {
    this.shipments.push(shipment);
  }
  updateShipment(id: number, updatedShipment: Shipment): void {
  const index = this.shipments.findIndex(s => s.id === id);
  if (index !== -1) {
    this.shipments[index] = updatedShipment
  }
  }

  deleteShipment(id: number): void {
    this.shipments = this.shipments.filter(s => s.id !== id);
  }
}
