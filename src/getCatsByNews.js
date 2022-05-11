import { initialState } from "./initialState"
import { render } from "./render";


export const getCatsByNews = (id) => {
    fetch("wrewrwqe" + id)
    .then((res) => res.json())
    .then((cats) => {
    initialState.news = cats;
    render()
    })
}