import { render } from "express/lib/response"
import { initialState } from "./initialState"


export const getNewsById = () => {
    fetch("")
    .then((res) => res.json())
    .then((news) => {
        initialState.news = news
    })
    render()
}