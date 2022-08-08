import { Player1 } from './../../models/Player1';
import { Component, OnInit } from '@angular/core';

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
        position: 'wing'
      },
      {
        name: 'Al',
        position: 'Prop'
      }
    ]
  }

}
