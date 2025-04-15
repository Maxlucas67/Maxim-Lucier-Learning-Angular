import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'shipmentLabel'
})
export class ShipmentLabelPipe implements PipeTransform {
  transform(receiverName: string, address: string): string {
    return `${receiverName} — ${address}`;
  }
}

