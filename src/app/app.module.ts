import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { MainComponent } from './mycomponents/main/main.component';
import { BookingComponent } from './mycomponents/booking/booking.component';
import { FooterComponent } from './mycomponents/footer/footer.component';
import { OurServiceComponent } from './mycomponents/our-service/our-service.component';
import { YourBookingComponent } from './mycomponents/your-booking/your-booking.component';
import { AboutComponent } from './mycomponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BookingComponent,
    FooterComponent,
    OurServiceComponent,
    YourBookingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
