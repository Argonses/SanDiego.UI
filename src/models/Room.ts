import { RoomStatus } from "./RoomStatus";
import { RoomType } from "./RoomType";

export class Room {
    id?: number;
    imageUrl?: string;
    roomNumber?: number;
    roomStatus?: RoomStatus;
    roomType?: RoomType;
    price?: number;
}
