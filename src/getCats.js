import { initialState } from "./initialState"
import { render } from "./render";


export const getCats = () => {
    fetch("")
    .then((res) => res.json())
    .then((cats) => {
    initialState.news = news;
    render()
    })
}