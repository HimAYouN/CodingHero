
function playlistManager(actions) {
    let arr = [];
    for (let i =0; i<actions.length;i++){
      if(actions[i]=== 'undo()'){
        if(arr.length>0){arr.pop()}
      }else{
         let cmd = actions[i];
         let part = cmd.split("'");
         if(part.length>=2){
          let songNmae = part[1];
          arr.push(`${songNmae}`);
         }
      }
  
    }
    return arr;
  }
  

  
 
  
  
  