import { initialState } from "./initialState"

export const getNews = () => {
    fetch("")
    .then((res) => res.json())
    .then((news) => {
        initialState.news = news
    })
}