import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/models/Room';
import { RoomStatus } from 'src/models/RoomStatus';
import { RoomType } from 'src/models/RoomType';
import { RoomService } from 'src/services/room.service';

@Component({
  selector: 'app-booking-room',
  templateUrl: './booking-room.component.html',
  styleUrls: ['./booking-room.component.css']
})
export class BookingRoomComponent {
  roomId?: number;
  room?: Room;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.roomId = +params.get('roomId')!;
      this.getRoom(this.roomId);
    });
  }

  getRoom(roomId: number): void {
    this.roomService.getRoom(roomId)
      .subscribe(room => this.room = room);
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
