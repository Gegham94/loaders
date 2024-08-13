import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'loaders';
  activeButton: string = 'diamond';

  constructor(private router: Router) {}

  ngOnInit() {
    this.setActiveFromUrl(this.router.url);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setActiveFromUrl(this.router.url);
    });
  }

  setActive(route: string){
    this.activeButton = route;
  }

  private setActiveFromUrl(url: string) {
    const route = url.split('/').pop() || 'diamond';
    this.setActive(route);
  }
}