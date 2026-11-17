import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notificationsList = [
    { message: "You have a new friend request from John.", timestamp: "2024-06-01 10:30 AM" },
     { message: "Your post has been liked by Sarah.", timestamp: "2024-06-01 09:15 AM" },
     { message: "You have a new message from Alex.", timestamp: "2024-05-31 08:45 PM" }  ,
  ]
  show= false;
  
  btnText = 'Show Notifications';
  ShowNotifications() {
this.show = !this.show;
this.btnText = this.show ? 'Hide Notifications' : 'Show Notifications';
  }
}