import { render } from "./index";
import { getNewsById } from "../getNewsById";
import { initialState } from "../initialState";
import { renderComments } from "./renderComments";


//const root = document.getElementById("root");
export const renderNews = () => {


    const root = document.querySelector("#root");
    const header = document.createElement('header')
    header.id = 'header'
    header.textContent = "News"

    const section = document.createElement("div")
    section.id = 'section'    
    const mainDivForNews = document.createElement("div")
    root.append(header)
    if (Array.isArray(initialState.news)){
        console.log(initialState)
        root.textContent = ""
        root.prepend(header)

        initialState.news.forEach((news) => {
        const divNews = document.createElement('div');
        divNews.textContent = news.title;
        divNews.addEventListener("click", () => getNewsById(news._id));
        mainDivForNews.append(divNews)
        section.append(mainDivForNews);
    })
    section.append(render())
    root.append(section);
} else {

   root.textContent = ""

    const title = document.createElement('title');
    title.textContent = initialState.news.title;
    
    const text = document.createElement('div')
    text.textContent = initialState.news.text
    root.append(header)
    mainDivForNews.append( title, text, renderComments(), render())
    section.append(mainDivForNews)
    root.append(section, renderComments())
}
}
console.log(initialState.news.text)