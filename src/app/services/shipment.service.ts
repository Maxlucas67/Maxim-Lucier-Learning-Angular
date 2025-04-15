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

  getShipmentById(id: number): Observable<Shipment | undefined> {
    const shipment = this.shipments.find(s => s.id === id);
    return of(shipment);
  }

  addShipment(shipment: Shipment): Observable<Shipment[]> {
    this.shipments.push(shipment);
    return of(this.shipments);
  }

  updateShipment(id: number, updatedShipment: Shipment): Observable<Shipment[]> {
    const index = this.shipments.findIndex(s => s.id === id);
    if (index !== -1) {
      this.shipments[index] = updatedShipment;
    }
    return of(this.shipments);
  }

  deleteShipment(id: number): Observable<Shipment[]> {
    const shipmentIndex = this.shipments.findIndex(s => s.id === id);
    if (shipmentIndex !== -1) {
      this.shipments.splice(shipmentIndex, 1);
    }
    return of(this.shipments);
  }
}
