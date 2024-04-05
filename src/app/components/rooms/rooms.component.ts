import { Component } from '@angular/core';
import { Room } from 'src/models/Room';
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
}
