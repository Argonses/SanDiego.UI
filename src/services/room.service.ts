import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Room } from 'src/models/Room';
import { RoomStatus } from 'src/models/RoomStatus';
import { RoomType } from 'src/models/RoomType';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  url = "SanDiego";

  constructor(private httpCLient: HttpClient) { }

  public getRooms() : Observable<Room[]> {
    return this.httpCLient.get<Room[]>(`${enviroment.apiUrl}/${this.url}`)
  }
}

