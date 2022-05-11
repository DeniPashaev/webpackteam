import { getComments } from "../getComments";
import { initialState } from "../initialState";


export const renderComments = () => {
    const comment = document.createElement('div');
    // const name = document.createElement("div");

    initialState.comments.forEach((com)=>{
        console.log(1);
    const text = document.createElement("div");
    text.textContent = com.text;
    // name.textContent = users.name;
    comment.append(text);
    
    })
}

/* document.querySelector("#root");
const footer = document.createElement("div");
const zagolovok1 = document.createElement("h1");
const zagolovok2 = document.createElement("h1");
zagolovok1.textContent = "перейти на сайт";
zagolovok2.textContent = "сделать ставку";
footer.append(zagolovok1, zagolovok2);
*/