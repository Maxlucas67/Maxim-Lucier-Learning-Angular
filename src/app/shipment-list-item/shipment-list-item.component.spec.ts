import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentListItemComponent } from './shipment-list-item.component';

describe('ShipmentListItemComponent', () => {
  let component: ShipmentListItemComponent;
  let fixture: ComponentFixture<ShipmentListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
