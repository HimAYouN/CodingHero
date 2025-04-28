import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  
  userName: string = ''
  submittedUsername: string = ''

  constructor(private UserService: UserService){}


  submitUsername() {
    this.UserService.userName = this.userName;
  }
}
