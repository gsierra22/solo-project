import { Component, OnInit } from '@angular/core';
import { TeamName } from 'src/models/TeamName';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {

  team: string;

  constructor() { }

  ngOnInit(): void {
    this.team=""
  }
  addTeam(){
    if (this.team !==""){
      const newTeam:  TeamName ={
        name: this.team
      }
    }
    // this.todoValue = ""
  }

}
