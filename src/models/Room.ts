import { Review } from "./Review";
import { RoomStatus } from "./RoomStatus";
import { RoomType } from "./RoomType";

export class Room {
    id?: number;
    imageUrl?: string;
    roomNumber?: number;
    roomStatus?: RoomStatus | number;
    roomType?: RoomType | number; 
    price?: number;
    reviews?: Review[];
}
