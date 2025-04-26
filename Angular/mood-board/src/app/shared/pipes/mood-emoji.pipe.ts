import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moodEmoji'
})
export class MoodEmojiPipe implements PipeTransform {

  transform(value: string): string {

    //H/W : what is any type, and whit will the return type of `const emoMap {happy: '😊', sad: '😟'};
    // type eMap = {[Key in 'happy' ]: string };
    
    // const emojiMap: {[Key in 'happy']: string} = {
    // const emojiMap = {
      
    const emojiMap: Record<string, string> = {
    happy: "😊",
    sad: "😟",
    calm: "😌",
    excited: "😃"
    }
    
    
    // return emojiMap[value] || " ";


    ///////Solution 1 : Tighten the index
    // const access = (str: keyof typeof emojiMap) => { return emojiMap[str] || ' '} //didn't work as expected
    ///////Solution 2 : Loosen the object type
    return emojiMap[value] || " ";

    /// Ref: `https://www.youtube.com/watch?v=Gxd4StCrN3g`


  }

}
