import { Player1 } from './../../models/Player1';
import { Component, Input, OnInit } from '@angular/core';
import { FrontComponent } from '../front/front.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  player1: Player1[];

  constructor() { }

  ngOnInit(): void {
    this.player1 = [
      {
        name: 'GC',
        position: 'wing',
        active: false
      },
      {
        name: 'Al',
        position: 'Prop',
        active: false
      }
    ]
  }

}
