export interface Shipment {
  id: number;
  senderName: string;
  receiverName: string;
  address: string;
  weight: number;
  isFragile?: boolean
}
