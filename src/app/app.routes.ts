import { Routes } from '@angular/router';
import { DiamondComponent } from './custom-loaders/diamond/diamond.component';
import { GearComponent } from './custom-loaders/gear/gear.component';
import { DotLoopComponent } from './custom-loaders/dot-loop/dot-loop.component';
import { DashLoopComponent } from './custom-loaders/dash-loop/dash-loop.component';
import { DotFlashComponent } from './custom-loaders/dot-flash/dot-flash.component';
import { CirculeWayComponent } from './custom-loaders/circule-way/circule-way.component';
import { TikTokCoverComponent } from './custom-loaders/tik-tok-cover/tik-tok-cover.component';
import { TetrisComponent } from './custom-loaders/tetris/tetris.component';
import { FallingBlocksComponent } from './custom-loaders/falling-blocks/falling-blocks.component';
import { Tetris2Component } from './custom-loaders/tetris-2/tetris-2.component';
import { JumperComponent } from './custom-loaders/jumper/jumper.component';
import { TriangleStarComponent } from './custom-loaders/triangle-star/triangle-star.component';
import { BallsComponent } from './custom-loaders/balls/balls.component';
import { LoadingComponent } from './custom-loaders/loading/loading.component';
import { SquarsComponent } from './custom-loaders/squars/squars.component';
import { MarioComponent } from './custom-loaders/mario/mario.component';
import { DotsFlipComponent } from './custom-loaders/dots-flip/dots-flip.component';
import { CubeFlipComponent } from './custom-loaders/cube-flip/cube-flip.component';
import { DotLoadComponent } from './custom-loaders/dot-load/dot-load.component';
import { OvalsFlipComponent } from './custom-loaders/ovals-flip/ovals-flip.component';
import { TimeComponent } from './custom-loaders/time/time.component';
import { LinesComponent } from './custom-loaders/lines/lines.component';
import { BlobLoopComponent } from './custom-loaders/blob-loop/blob-loop.component';
import { BlobCubeComponent } from './custom-loaders/blob-cube/blob-cube.component';
import { DotSlideComponent } from './custom-loaders/dot-slide/dot-slide.component';
import { DotCutComponent } from './custom-loaders/dot-cut/dot-cut.component';
import { DotCutRotateComponent } from './custom-loaders/dot-cut-rotate/dot-cut-rotate.component';
import { DotRotateComponent } from './custom-loaders/dot-rotate/dot-rotate.component';
import { DotSwellUpComponent } from './custom-loaders/dot-swell-up/dot-swell-up.component';

export const routes: Routes = [
  {
    path: '',
    component: DiamondComponent,
  },
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
  {
    path: 'circule_way',
    component: CirculeWayComponent,
  },
  {
    path: 'tik_tok',
    component: TikTokCoverComponent,
  },
  {
    path: 'tetris',
    component: TetrisComponent,
  },
  {
    path: 'falling_blocks',
    component: FallingBlocksComponent,
  },
  {
    path: 'tetris_2',
    component: Tetris2Component,
  },
  {
    path: 'jumper',
    component: JumperComponent,
  },
  {
    path: 'triangle_star',
    component: TriangleStarComponent,
  },
  {
    path: 'balls',
    component: BallsComponent,
  },
  {
    path: 'loading',
    component: LoadingComponent,
  },
  {
    path: 'squars',
    component: SquarsComponent,
  },
  {
    path: 'mario',
    component: MarioComponent,
  },
  {
    path: 'dots_flip',
    component: DotsFlipComponent,
  },
  {
    path: 'cube_flip',
    component: CubeFlipComponent,
  },
  {
    path: 'dot_load',
    component: DotLoadComponent,
  },
  {
    path: 'dot_slide',
    component: DotSlideComponent,
  },
  {
    path: 'ovals_flip',
    component: OvalsFlipComponent,
  },
  {
    path: 'time',
    component: TimeComponent,
  },
  {
    path: 'lines',
    component: LinesComponent,
  },
  {
    path: 'blob_loop',
    component: BlobLoopComponent,
  },
  {
    path: 'blob_cube',
    component: BlobCubeComponent,
  },
  {
    path: 'dot_cut',
    component: DotCutComponent,
  },
  {
    path: 'dot_cut_rotate',
    component: DotCutRotateComponent,
  },
  {
    path: 'dot_rotate',
    component: DotRotateComponent,
  },
  {
    path: 'dot_swell_up',
    component: DotSwellUpComponent,
  },
  { path: '**', redirectTo: 'diamond' },
];
