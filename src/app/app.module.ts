import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { PlayerComponent } from './player/player.component';
import { ScoresComponent } from './scores/scores.component';
import { Player2Component } from './player2/player2.component';
import { FrontComponent } from './front/front.component';
import { TeamFormComponent } from './team-form/team-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerComponent,
    ScoresComponent,
    Player2Component,
    FrontComponent,
    TeamFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
