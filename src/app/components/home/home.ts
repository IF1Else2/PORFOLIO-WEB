import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {

  ngAfterViewInit(): void {
    const elements = document.querySelectorAll<HTMLElement>('.scroll-anim');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add('visible');
          observer.unobserve(el); // si quieres que solo se anime una vez
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }
}
