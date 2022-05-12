
import { getComments } from "./getComments"
import { initialState } from "./initialState"
import { renderNews } from "./render/renderNews"


export const getNewsById = (id) => {
    fetch("http://localhost:3000/news/" + id)
    .then((res) => res.json())
    .then((news) => {
    initialState.news = news
    getComments(id)
    renderNews()
})
    //renderNews()
}