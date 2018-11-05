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
  styles = "styleAdmin"
  guest = "Admin"
  status = true;
  statusText = "Show"
  statusTextButton = "Hide"

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
  switchUser() {
    this.isAdmin = !this.isAdmin
    this.styles = this.isAdmin ? "styleAdmin" : "styleGuest"
    this.guest = this.isAdmin ? "Admin" : "Guest"
  }

  changeStatus() {
    this.status = !this.status;
    this.statusText = this.status ? "Show" : "Hide"
    this.statusTextButton = this.status ? "Hide" : "Show"
  }
}