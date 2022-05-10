import { initialState } from "./initialState"

export const getComments = () => {
    fetch("")
    .then((res) => res.json())
    .then((comments) => {
        initialState.comments = comments;
    })
}
 