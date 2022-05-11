import { initialState } from "./initialState"
import { render } from "./render";
import { renderComments } from "./render/renderComments";

export const getComments = (id) => {
    fetch("http://localhost:3000/news/comment/" + id )
    .then((res) => res.json())
    .then((comments) => {
        console.log(comments);
        initialState.comments = comments;
    })
    // render()
    // renderComments()

}

