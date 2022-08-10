import { Component, OnInit } from '@angular/core';
import { TeamName } from 'src/models/TeamName';
import { NgModel } from '@angular/forms';
import { Player1 } from 'src/models/Player1';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {

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
      console.log(newPlayer)
    }
    this.nameValue = "";
    this.positionValue=""
  }
}
