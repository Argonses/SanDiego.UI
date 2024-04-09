import { Component } from '@angular/core';
import { Room } from 'src/models/Room';
import { RoomStatus } from 'src/models/RoomStatus';
import { RoomType } from 'src/models/RoomType';
import { RoomService } from 'src/services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  rooms: Room[] = [];

  constructor(private roomService : RoomService) {}

  ngOnInit() : void {
    this.roomService.getRooms().subscribe(
      (result: Room[]) => (this.rooms = result));
  }

  getRoomStatus(status?: number): string {
    switch (status) {
      case RoomStatus.Available:
        return 'Available';
      case RoomStatus.Occupied:
        return 'Occupied';
      case RoomStatus.OutOfOrder:
        return 'OutOfOrder';
      case RoomStatus.InCleaning:
        return 'InCleaning';
      default:
        return 'Unknown';
    }
  }
  
  getRoomType(type?: number): string {
    switch (type) {
      case RoomType.Single:
        return 'Single';
      case RoomType.Double:
        return 'Double';
      case RoomType.Group:
        return 'Group';
      default:
        return 'Unknown';
    }
  }
}
