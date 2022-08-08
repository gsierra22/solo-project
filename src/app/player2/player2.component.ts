import { Component, OnInit } from '@angular/core';
import { Player2 } from 'src/models/Player2';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.scss']
})
export class Player2Component implements OnInit {

  player2: Player2[];
  constructor() { }

  ngOnInit(): void {
    this.player2 = [
      {
        name: 'CG',
        position: 'wing',
        active: false
      },
      {
        name: 'Tom',
        position: 'Prop',
        active: false
      }
    ]
  }

}
