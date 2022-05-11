import { getComments } from "../getComments";

export const renderComments = () => {
    const comment = document.createElement('div');
    // const name = document.createElement("div");
    const text = document.createElement("div");
    text.textContent = comment.text;
    // name.textContent = users.name;
    comment.append( text);
    return comment;
}

/* document.querySelector("#root");
const footer = document.createElement("div");
const zagolovok1 = document.createElement("h1");
const zagolovok2 = document.createElement("h1");
zagolovok1.textContent = "перейти на сайт";
zagolovok2.textContent = "сделать ставку";
footer.append(zagolovok1, zagolovok2);
*/