import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoodMessageDirective } from '../shared/directives/mood-message.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MoodMessageDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  moods = ['happy', 'sad', 'calm', 'excited'];
  selectedMood : string = '';
  userName: string = 'Hero_01'
  showSelectedMood: boolean = false;
  moodMessage: string  = '';
  
  


  constructor () {

  }
  ngOnInit(){
    // console.log(this.userName);
  }
  selectMood(mood: string){
    this.showSelectedMood= true;
    this.selectedMood = mood;
    const moodMessageDirective =  new MoodMessageDirective();
    moodMessageDirective.mood = this.selectMood;
    // this.moodMessage = new this.MoodMessageDirective().getMoodMessage();
    this.moodMessage = moodMessageDirective.getMoodMessage();
    // console.log(this.selectedMood)
  }
  

}

