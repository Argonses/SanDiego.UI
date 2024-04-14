import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Review } from 'src/models/Review';
import { Room } from 'src/models/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  url = "SanDiego";
  url2 = "Reviews";

  constructor(private httpCLient: HttpClient) { }

  public getRooms() : Observable<Room[]> {
    return this.httpCLient.get<Room[]>(`${enviroment.apiUrl}/${this.url}`)
  }

  public getRoom(roomId: number) : Observable<Room> {
    return this.httpCLient.get<Room>(`${enviroment.apiUrl}/${this.url}/${roomId}`)
  }

  public addReview(review: Review): Observable<Review> {
      return this.httpCLient.post<Review>(`${enviroment.apiUrl}/${this.url2}`, review);
  }

  public getReviews() : Observable<Review[]> {
    return this.httpCLient.get<Review[]>(`${enviroment.apiUrl}/${this.url2}`)
  }
}

