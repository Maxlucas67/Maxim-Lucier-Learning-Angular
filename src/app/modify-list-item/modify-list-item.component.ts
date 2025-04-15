import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShipmentService } from '../services/shipment.service';
import { Shipment } from '../models/shipment.model';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {
  shipmentForm!: FormGroup;
  editMode = false;
  shipmentId?: number;

  constructor(
    private fb: FormBuilder,
    private shipmentService: ShipmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.shipmentForm = this.fb.group({
      id: [null],
      senderName: ['', Validators.required],
      receiverName: ['', Validators.required],
      address: ['', Validators.required],
      weight: [0, [Validators.required, Validators.min(0.1)]],
      isFragile: [false],
      image: ['']
    });

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.editMode = true;
        this.shipmentId = id;
        this.shipmentService.getShipmentById(id).subscribe(shipment => {
          if (shipment) {
            this.shipmentForm.patchValue(shipment);
          }
        });
      }
    });
  }

  onSubmit() {
    const formValue = this.shipmentForm.value as Shipment;
    if (this.editMode) {
      this.shipmentService.updateShipment(formValue.id, formValue).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.shipmentService.addShipment(formValue).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
