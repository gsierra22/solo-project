import { HeaderComponent } from './header/header.component';
import { ScoresComponent } from './scores/scores.component';
import { PlayerComponent } from './player/player.component';
import { FrontComponent } from './front/front.component';
import { TeamFormComponent } from './team-form/team-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Player2Component } from './player2/player2.component';

const routes: Routes = [
  {path: 'players', component: TeamFormComponent},
  {path: 'scores', component:ScoresComponent},
  {path: '', component:FrontComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PlayerComponent, ScoresComponent]