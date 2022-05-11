import { initialState } from "./initialState"
import { renderNews } from "./render/renderNews"

export const getNews = () => {
    fetch("http://localhost:3000/news")
    .then((res) => res.json())
    .then((news) => {
    initialState.news = news
    renderNews()
    })
    //renderNews()
}