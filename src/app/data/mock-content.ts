

import { Shipment } from '../models/shipment.model';

export const MOCK_SHIPMENTS: Shipment[] = [
  {
    id: 101,
    senderName: 'Maxim Lucier',
    receiverName: 'Marg Lee',
    address: '1110 Fortworth',
    weight: 3.5,
    isFragile: true,
    image: 'models/cardboard.png',
    cost: 25.99,
    date: new Date('2025-04-10'),
    type: 'standard'
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
