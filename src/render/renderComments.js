import { getComments } from "../getComments";
import { initialState } from "../initialState";


export const renderComments = () => {
    const comment = document.createElement('div');
    // const name = document.createElement("div");

    if(Array.isArray(initialState.comments)) {
    initialState.comments.forEach((com)=>{
    console.log(com);
    const text = document.createElement("div");
    text.textContent = com.text;
    // name.textContent = users.name;
    comment.append(text);
    })    
} else {
    console.log(comment)
    comment.textContent = initialState.comments.text
}
return comment
}

/* document.querySelector("#root");
const footer = document.createElement("div");
const zagolovok1 = document.createElement("h1");
const zagolovok2 = document.createElement("h1");
zagolovok1.textContent = "перейти на сайт";
zagolovok2.textContent = "сделать ставку";
footer.append(zagolovok1, zagolovok2);
*/