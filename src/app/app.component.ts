import { Component, OnInit } from '@angular/core';
import {
  RouterModule,
  RouterOutlet,
  Router,
  NavigationEnd,
} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'loaders';
  activeButton: string = 'diamond';
  isMobile: boolean = false;
  dropdownOpen: boolean = false;
  loaders = [
    { title: 'Diamond', value: 'diamond' },
    { title: 'Gear', value: 'gear' },
    { title: 'Mario', value: 'mario' },
    { title: 'Loop', value: 'dot_loop' },
    { title: 'Dash Loop', value: 'dash_loop' },
    { title: 'Blob Loop', value: 'blob_loop' },
    { title: 'Circule Way', value: 'circule_way' },
    { title: 'Triangle Star', value: 'triangle_star' },
    { title: 'Ovals Flip', value: 'ovals_flip' },
    { title: 'Dots Flip', value: 'dots_flip' },
    { title: 'Balls', value: 'balls' },
    { title: 'Dot Flash', value: 'dot_flash' },
    { title: 'Dot Slide', value: 'dot_slide' },
    { title: 'Tik Tok', value: 'tik_tok' },
    { title: 'Tetris', value: 'tetris' },
    { title: 'Tetris 2', value: 'tetris_2' },
    { title: 'Cube Flip', value: 'cube_flip' },
    { title: 'Blob Cube', value: 'blob_cube' },
    { title: 'Time', value: 'time' },
    { title: 'Falling Blocks', value: 'falling_blocks' },
    { title: 'Jumper', value: 'jumper' },
    { title: 'Loading', value: 'loading' },
    { title: 'Squars', value: 'squars' },
    { title: 'Lines', value: 'lines' },
  ];

  constructor(
    private router: Router,
    private deviceService: DeviceDetectorService
  ) {}

  ngOnInit() {
    console.log(this.deviceService.deviceType);
    this.isMobile = this.deviceService.deviceType === 'mobile' ? true : false;
    this.setActiveFromUrl(this.router.url);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActiveFromUrl(this.router.url);
      });
  }

  setActive(route: string) {
    this.activeButton = route;
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  private setActiveFromUrl(url: string) {
    const route = url.split('/').pop() || 'diamond';
    this.setActive(route);
  }
}
