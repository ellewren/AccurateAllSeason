import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: string[] = [
    '/project1.jpg',
    '/project2.jpg',
    '/project3.jpg',
  ];
  currentImageIndex = 0;



  nextSlide() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentImageIndex = index;
  }
}
