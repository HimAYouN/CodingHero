// 1st try : wrong code
// type keyValue={
//     [key: string]: string ;
// };

// const emojiMap: keyValue={
//     happy: '😀 ',
//     sad: '🥲 ',
//     excited: '😃 ',
//     angry: '😤 ',
//     calm: '😌'

// }


// bht time baad : thoda seekha
//this is just part of code copied from another file...
// url: https://github.com/HimAYouN/CodingHero/blob/main/Angular/mood-board/src/app/shared/pipes/mood-emoji.pipe.ts
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