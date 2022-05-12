import { initialState } from "../initialState";

export const renderComments = () => {
    const comment = document.createElement('div');
    comment.classList = "comment"
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

document.querySelector("#root");

