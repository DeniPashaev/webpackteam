import { initialState } from "./initialState"
import { render } from "./render";
import { renderNews } from "./render/renderNews";


export const getCatsByNews = (id) => {
    fetch("http://localhost:3000/news/cat/" + id)
    .then((res) => res.json())
    .then((cats) => {
    initialState.news = cats;
    renderNews();
    })
}