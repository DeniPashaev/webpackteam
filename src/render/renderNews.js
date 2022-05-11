import { getNewsById } from "../getNews";
import { initialState } from "../initialState";

const root = document.getElementById("root");
export const renderNews = () => {

    const header = document.createElement('header')
    header.id = 'header'
    header.textContent = "News"

    const section = document.createElement("div")
    section.id = 'section'
    
    root.append(header, section)
    
    if (Array.isArray(initialState.news)){

        root.textContent = ""

    initialState.news.forEach((news) => {
        const divNews = document.createElement('div');
        divNews.textContent = news.title;
        divNews.addEventListener("click", () => getNewsById(news.id));
        section.append(render(), divNews);

    })
} else {

    root.textContent = ""

    const title = document.createElement('title');
    title.textContent = initialState.news.title;
    
    const text = document.createElement('div')
    text.textContent = initialState.news.body

    root.append(title, text, renderComments())
}
}