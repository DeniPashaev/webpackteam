import { getCatsByNews } from "./getCatsByNews";
import { getNews } from "./getNews";
import { getNewsById } from "./getNewsById";
import { initialState } from "./initialState"
import { render } from "./render";
import { renderComments } from "./render/renderComments";

export const getComments = (id) => {
    fetch("http://localhost:3000/news/comment/" + id )
    .then((res) => res.json())
    .then((comment) => {
        initialState.comments = comment;
        console.log(comment)
        console.log(id);
        //  render()
        renderComments()
        
    })

}

