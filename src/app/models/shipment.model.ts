export interface Shipment {
  id: number;
  senderName: string;
  receiverName: string;
  address: string;
  weight: number;
  isFragile?: boolean
  image?: string;

  cost?: number;
  date?: Date;
  type?: string;
}
