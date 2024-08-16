import { CommonModule } from '@angular/common';
import {
  Component,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChildren('elementItemRef') elementItemRef!: QueryList<any>;

  title = 'loaders';
  activeButton: string = 'diamond';

  isMobile: boolean = false;
  dropdownOpen: boolean = false;

  selectedItemId: number = 0;
  loaders = [
    { id: 0, title: 'Diamond', value: 'diamond' },
    { id: 1, title: 'Gear', value: 'gear' },
    { id: 2, title: 'Mario', value: 'mario' },
    { id: 3, title: 'Loop', value: 'dot_loop' },
    { id: 4, title: 'Dash Loop', value: 'dash_loop' },
    { id: 5, title: 'Blob Loop', value: 'blob_loop' },
    { id: 6, title: 'Circule Way', value: 'circule_way' },
    { id: 7, title: 'Triangle Star', value: 'triangle_star' },
    { id: 8, title: 'Ovals Flip', value: 'ovals_flip' },
    { id: 9, title: 'Dots Flip', value: 'dots_flip' },
    { id: 10, title: 'Balls', value: 'balls' },
    { id: 11, title: 'Dot Flash', value: 'dot_flash' },
    { id: 12, title: 'Dot Slide', value: 'dot_slide' },
    { id: 13, title: 'Tik Tok', value: 'tik_tok' },
    { id: 14, title: 'Tetris', value: 'tetris' },
    { id: 15, title: 'Tetris 2', value: 'tetris_2' },
    { id: 16, title: 'Cube Flip', value: 'cube_flip' },
    { id: 17, title: 'Blob Cube', value: 'blob_cube' },
    { id: 18, title: 'Time', value: 'time' },
    { id: 19, title: 'Falling Blocks', value: 'falling_blocks' },
    { id: 20, title: 'Jumper', value: 'jumper' },
    { id: 21, title: 'Loading', value: 'loading' },
    { id: 22, title: 'Squars', value: 'squars' },
    { id: 23, title: 'Lines', value: 'lines' },
  ];

  constructor(
    private router: Router,
    private deviceService: DeviceDetectorService
  ) {}

  ngOnInit() {
    this.isMobile = this.deviceService.deviceType === 'mobile' ? true : false;
    this.activeButton = 'diamond';
    this.router.navigate(['diamond']);
  }

  setActive(value: string, id: number) {
    this.activeButton = value;
    this.selectedItemId = id;
    setTimeout(() => {
      this.dropdownOpen = false;
    }, 300);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    setTimeout(() => {
      const elements = this.elementItemRef.toArray();
      const selectedElementItem = elements[this.selectedItemId].nativeElement;
      selectedElementItem.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
}
