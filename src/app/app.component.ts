import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solo-project';
  count: number;

  ngOnInit(){
    this.count=0
  }

  addCount(){
    this.count++
  }

  subtractCount(){
    this.count--;
  }
}
