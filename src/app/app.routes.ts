import { Routes } from '@angular/router';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';
import { ShipmentDetailComponent } from './shipment-detail/shipment-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/shipments', pathMatch: 'full' },
  { path: 'shipments', component: ShipmentListComponent},
  { path: 'shipment/:id', component: ShipmentDetailComponent}
];
