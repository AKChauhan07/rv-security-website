
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  menuOpen = false;

  currentYear = new Date().getFullYear();

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}