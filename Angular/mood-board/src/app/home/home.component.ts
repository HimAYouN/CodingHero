import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoodMessageDirective } from '../shared/directives/mood-message.directive';
import { MoodEmojiPipe } from '../shared/pipes/mood-emoji.pipe';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MoodEmojiPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  moods = ['happy', 'sad', 'calm', 'excited'];
  selectedMood : string = '';
  userName: string = 'Hero_01'
  showSelectedMood: boolean = false;
  moodMessage: string  = '';
  isMoodMessage: boolean = false;
  
  


  constructor () {

  }
  ngOnInit(){
    // console.log(this.userName);
  }
  selectMood(mood: string){
    // this.showSelectedMood= true;
    // this.selectedMood = mood;
    // const moodMessageDirective =  new MoodMessageDirective();
    // moodMessageDirective.mood = this.selectMood;
    // // this.moodMessage = new this.MoodMessageDirective().getMoodMessage();
    // this.moodMessage = moodMessageDirective.getMoodMessage();
    // // console.log(this.selectedMood)


    this.showSelectedMood = true;
    this.selectedMood = mood;
    const moodMessageDirective = new MoodMessageDirective();
    moodMessageDirective.mood = this.selectedMood // yaha p 2 din sy issue aya selectMood likh rha tha selectedMood likhna tha 
    this.moodMessage = moodMessageDirective.getMoodMessage()
    if(this.moodMessage){
      this.isMoodMessage = true;
    }
    console.log(this.moodMessage)
    // this.moodMessage = new MoodMessageDirective().getMoodMessage();




  }
  

}

