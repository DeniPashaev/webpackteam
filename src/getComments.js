import { initialState } from "./initialState"
import { renderComments } from "./render/renderComments";

export const getComments = () => {
    fetch("")
    .then((res) => res.json())
    .then((comments) => {
        initialState.comments = comments;
    })
}
