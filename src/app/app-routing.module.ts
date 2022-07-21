import { ScoresComponent } from './scores/scores.component';
import { PlayerComponent } from './player/player.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Player2Component } from './player2/player2.component';

const routes: Routes = [
  {path: 'players', component: PlayerComponent},
  {path: 'scores', component:ScoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PlayerComponent, ScoresComponent]