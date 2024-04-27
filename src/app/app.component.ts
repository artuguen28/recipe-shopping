import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedPage: number = 0;

  changePage(pageNumber: number) {
    this.selectedPage = pageNumber;
  }
}
