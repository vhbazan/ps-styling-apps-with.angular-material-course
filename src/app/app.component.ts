import { Component } from '@angular/core';
import SwiperCore, { Navigation } from 'swiper';
// import { SwiperComponent } from "swiper/angular";


SwiperCore.use([Navigation])
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularmaterial';

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}

