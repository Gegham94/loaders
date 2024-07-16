import { Routes } from '@angular/router';
import { DiamondComponent } from './custom-loaders/diamond/diamond.component';
import { GearComponent } from './custom-loaders/gear/gear.component';
import { DotLoopComponent } from './custom-loaders/dot-loop/dot-loop.component';
import { DashLoopComponent } from './custom-loaders/dash-loop/dash-loop.component';
import { DotFlashComponent } from './custom-loaders/dot-flash/dot-flash.component';

export const routes: Routes = [
  {
    path: 'diamond',
    component: DiamondComponent,
  },
  {
    path: 'gear',
    component: GearComponent,
  },
  {
    path: 'dot_loop',
    component: DotLoopComponent,
  },
  {
    path: 'dash_loop',
    component: DashLoopComponent,
  },
  {
    path: 'dot_flash',
    component: DotFlashComponent,
  },
  { path: '**', redirectTo: 'diamond' },
];
