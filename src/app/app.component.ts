import { Component } from '@angular/core';

@Component({
  selector: 'welcome-guest',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular";
  availableRoom = 5;
  username = "input your name";
  showName = "input your name";
  isAdmin = true;
  
  guest = {
    text: this.isAdmin ? "Admin" : "Guest",
  }
  styles = {
    'font-family': this.isAdmin ? "italic" : "normal",
    'font-size': this.isAdmin ? "24px" : "16px",
    'font-weight': this.isAdmin ? "200px" : "0px",
    'color': this.isAdmin ? "#111111" : "#4af767"
  }
  getAvailableRoom() {
    return this.availableRoom;
  }
  reserveRoom() {
    if(this.availableRoom > 0) {
      this.availableRoom --;
    }
  }
  show(event) {
    this.showName = event.target.value;
  }
  checkAvailableRoom() {
    return this.availableRoom == 0 ? true : false
  }
}