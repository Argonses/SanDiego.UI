import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookingRoomComponent } from './components/booking-room/booking-room.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'booking-place/:roomId', component: BookingRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
