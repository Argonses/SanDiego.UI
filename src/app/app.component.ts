import { Component } from '@angular/core';
import { Room } from 'src/models/Room';
import { RoomService } from 'src/services/room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SanDiego.UI';
}
