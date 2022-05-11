import { initialState } from "./initialState"
import { renderComments } from "./render/renderComments";
import { renderNews } from "./render/renderNews";

export const getComments = (id) => {
    fetch("http://localhost:3000/news/comment/" + id )
    .then((res) => res.json())
    .then((comments) => {
        initialState.comments = comments;
        renderComments()
    })
    renderNews()
}

