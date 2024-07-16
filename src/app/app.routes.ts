import { Routes } from '@angular/router';
import { DiamondComponent } from './custom-loaders/diamond/diamond.component';
import { GearComponent } from './custom-loaders/gear/gear.component';
import { LoopComponent } from './custom-loaders/loop/loop.component';

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
    path: 'loop',
    component: LoopComponent,
  },
  { path: '**', redirectTo: 'diamond' },
];
