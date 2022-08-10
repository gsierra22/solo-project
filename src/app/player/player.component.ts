import { Player1 } from './../../models/Player1';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  player1: Player1[];
  nameValue: string;
  positionValue: string;

  constructor() { }

  ngOnInit(): void {
    this.player1 = [
    ];
    this.nameValue="";
    this.positionValue="";
  }

  addTask(){
    if (this.nameValue !=="" && this.positionValue !==""){
      const newPlayer: Player1 = {
        name: this.nameValue,
        position: this.positionValue,
        active: false

      };
      this.player1.push(newPlayer);
    }
    this.nameValue = "";
    this.positionValue=""
  }

}
