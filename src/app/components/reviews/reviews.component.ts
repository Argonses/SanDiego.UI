import { Component } from '@angular/core';
import { Review } from 'src/models/Review';
import { RoomService } from 'src/services/room.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews: Review[] = [];

  constructor(
    private roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.roomService.getReviews().subscribe(
      (data) => {
        console.log('Data z API:', data);
        this.reviews = data;
      },
      (error) => {
        console.error('Chyba při načítání dat:', error);
      }
    );
  }
}
