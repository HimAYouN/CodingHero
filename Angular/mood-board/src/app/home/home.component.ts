import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoodMessageDirective } from '../shared/directives/mood-message.directive';
import { MoodEmojiPipe } from '../shared/pipes/mood-emoji.pipe';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MoodEmojiPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  moods = ['happy', 'sad', 'calm', 'excited'];
  selectedMood: string = '';

  showSelectedMood: boolean = false;
  moodMessage: string = '';
  isMoodMessage: boolean = false;

  constructor(private UserService: UserService) {}
  ngOnInit() {
    this.userName = this.UserService.userName;
  }
  userName: string = '';
  selectMood(mood: string) {
    this.showSelectedMood = true;
    this.selectedMood = mood;
    const moodMessageDirective = new MoodMessageDirective();
    moodMessageDirective.mood = this.selectedMood; // yaha p 2 din sy issue aya selectMood likh rha tha selectedMood likhna tha
    this.moodMessage = moodMessageDirective.getMoodMessage();
    if (this.moodMessage) {
      this.isMoodMessage = true;
    }
    console.log(this.moodMessage);
  }
}
