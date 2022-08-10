
import { Component, Input, OnInit } from '@angular/core';
import { TeamName } from 'src/models/TeamName';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  constructor() { }

  @Input()team: string;

  ngOnInit(): void {
    this.team=""
  }
  addTeam(){
    if (this.team !==""){
      const newTeam:  TeamName ={
        name: this.team
      }
    }
    console.log(this.team)
  }

}
