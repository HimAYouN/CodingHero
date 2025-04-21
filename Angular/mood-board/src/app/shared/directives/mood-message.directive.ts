import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appMoodMessage]'
})
export class MoodMessageDirective {
  @Input() mood: string =  '';
  moodMessages: any = {
    'happy': "Happiness is not by chance, but by choice. 😊",
    'sad': "Tears are words the heart can't express. 💧",
    'calm': "Peace comes from within. Do not seek it without. 🧘‍♂️",
    'excited': "The future belongs to those who believe in the beauty of their dreams. 🚀"
  };
  


  constructor(){ }

  getMoodMessage(): any{
    if(this.mood && this.moodMessages(this.mood)) return this.moodMessages(this.mood)
    

  }
}
