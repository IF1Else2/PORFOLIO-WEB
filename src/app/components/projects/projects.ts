import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
   /** Carrusel del Proyecto 1 */
  projectImages: string[] = [
    'assets/images/inicioCuidaBot.png',
    'assets/images/configuracionCuidaBot.png',
  ];

  /** Carrusel del Proyecto 2 */
  projectImages1: string[] = [
    'assets/images/ir1.png',
    'assets/images/ir22.png'
  ];

  /** Carrusel del Proyecto 3 */
  projectImages2: string[] = [
    'assets/images/ch1.png',
    'assets/images/ch2.png'
  ];

  /** Índices actuales de cada carrusel */
  currentIndex: number = 0;
  currentIndex1: number = 0;
  currentIndex2: number = 0;

  /** Navega hacia la imagen anterior del Proyecto 1 */
  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.projectImages.length) % this.projectImages.length;
  }

  /** Navega hacia la imagen siguiente del Proyecto 1 */
  nextImage() {
    this.currentIndex =
      (this.currentIndex + 1) % this.projectImages.length;
  }

  /** Navega hacia la imagen anterior del Proyecto 2 */
  prevImage1() {
    this.currentIndex1 =
      (this.currentIndex1 - 1 + this.projectImages1.length) % this.projectImages1.length;
  }

  /** Navega hacia la imagen siguiente del Proyecto 2 */
  nextImage1() {
    this.currentIndex1 =
      (this.currentIndex1 + 1) % this.projectImages1.length;
  }

  /** Navega hacia la imagen anterior del Proyecto 3 */
  prevImage2() {
    this.currentIndex2 =
      (this.currentIndex2 - 1 + this.projectImages2.length) % this.projectImages2.length;
  }

  /** Navega hacia la imagen siguiente del Proyecto 3 */
  nextImage2() {
    this.currentIndex2 =
      (this.currentIndex2 + 1) % this.projectImages2.length;
  }
} 