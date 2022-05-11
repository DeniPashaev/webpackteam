import { getComments } from "./getComments";
import { getNews } from "./getNews";
import { initialState } from "./initialState"
import { render } from "./render";

export const getCats = () => {
    fetch("http://localhost:3000/cats")
    .then((res) => res.json())
    .then((cats) => {
    initialState.cats = cats;
    getNews()
    
    })
}