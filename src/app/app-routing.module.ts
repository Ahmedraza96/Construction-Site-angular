import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './mycomponents/about/about.component';
import { BookingComponent } from './mycomponents/booking/booking.component';
import { OurServiceComponent } from './mycomponents/our-service/our-service.component';
import { YourBookingComponent } from './mycomponents/your-booking/your-booking.component';

const routes: Routes = [
  {
    path : 'book-now',
    component : BookingComponent
  },
  {
    path : 'services',
    component : OurServiceComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'your-booking',
    component : YourBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
