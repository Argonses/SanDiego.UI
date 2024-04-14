import { Component } from '@angular/core';
import { Review } from 'src/models/Review';
import { RoomService } from 'src/services/room.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {
  newReview: Review = new Review();

  constructor(
    private roomService: RoomService
  ) { }

  submitReview() {
    this.roomService.addReview(this.newReview).subscribe(
      (response) => {
        console.log('Review was succesfully sended:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
