
//Debounce :
let counter = 1;
 function getSearchResults(){
    console.log(`Doing an api call : ${counter}`);
    counter+=1;
 }

 function jadooKarlo(myFn, delay){
    return function(){
        setTimeout(() => {
            myFn();
        }, delay);
    };
 }

 const optimizedGetSearchResults = jadooKarlo(getSearchResults, 1000)