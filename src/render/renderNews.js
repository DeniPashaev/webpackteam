import { render } from "./index";
import { getNewsById } from "../getNewsById";
import { initialState } from "../initialState";
import { renderComments } from "./renderComments";
import { getNews } from "../getNews";

//const root = document.getElementById("root");
export const renderNews = () => {


    const root = document.querySelector("#root");
    const header = document.createElement('header')
    header.id = 'header'
    header.textContent = "News"

    const section = document.createElement("div")
    section.id = 'section'    
    const mainDivForNews = document.createElement("div")
    mainDivForNews.className = "mainDivForNews"
    root.append(header)
    header.addEventListener("click", ()=>
    
    getNews()
)
    if (Array.isArray(initialState.news)){
       console.log(initialState)
        root.textContent = ""
        root.prepend(header)

        initialState.news.forEach((news) => {
        const divNews = document.createElement("div")
        divNews.classList = "divNews"
        const textNews = document.createElement('a');
        textNews.textContent = news.title;
        textNews.classList = "textNews"
        textNews.href = "#0"
        textNews.style.color = "black"
        textNews.style.textDecoration = "none"
        divNews.append(textNews)
        textNews.addEventListener("click", () => getNewsById(news._id));
        mainDivForNews.append(divNews)
        section.append(mainDivForNews);
    })
    section.append(render())
    root.append(section);
    
} else {

   root.textContent = ""

    const title = document.createElement('div');
    title.textContent = initialState.news.title;
    
    const text = document.createElement('div')
    text.textContent = initialState.news.text
    root.append(header)
    mainDivForNews.append( title, text, renderComments())
    
    section.append(mainDivForNews, render())
    root.append(section)
    
}
}