import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  friendsList = [{name: "John ", age: 25, email: "john.doe@example.com"},
    {name: "Jane ", age: 30, email: "jane.smith@example.com"},
    {name: "Alice ", age: 28, email: "alice.johnson@example.com"}
  ]
}
