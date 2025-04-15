import { Routes } from '@angular/router';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';
import { ShipmentDetailComponent } from './shipment-detail/shipment-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModifyListItemComponent } from './modify-list-item/modify-list-item.component';

export const routes: Routes = [
  { path: '', redirectTo: '/shipments', pathMatch: 'full' },
  { path: 'shipments', component: ShipmentListComponent},
  { path: 'shipment/:id', component: ShipmentDetailComponent},
  { path: 'modify', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];
