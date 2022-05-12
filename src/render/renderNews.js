import { render } from "./index";
import { getNewsById } from "../getNewsById";
import { initialState } from "../initialState";
import { renderComments } from "./renderComments";
import { getNews } from "../getNews";

export const renderNews = () => {


    const root = document.querySelector("#root");
    const header = document.createElement('header')
    header.id = 'header'
    header.textContent = "News"

    const section = document.createElement("div")
    section.id = 'section'    
    const mainDivForNews = document.createElement("div")
    mainDivForNews.className = "mainDivForNews"
    const footer = document.createElement("div");
    footer.classList = "footer"
    const zagolovok1 = document.createElement("a");
    const zagolovok2 = document.createElement("a");
    const img = document.createElement("img")
    img.src = "/icon/imgonline-com-ua-Transparent-backgr-nkatLlqAM31KE copy.png"
    zagolovok1.classList = "zagolovok1"
    zagolovok2.classList = "zagolovok2";
    img.classList = "img"
    zagolovok1.href = "#0";
    zagolovok2.href =  "#0";
    zagolovok1.textContent = "Связаться с нами";
    zagolovok2.textContent = "Мобильное приложение";

    footer.append(zagolovok1,img, zagolovok2);
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
    root.append(section, footer);
    
} else {

   root.textContent = ""

    const title = document.createElement('div');
    title.textContent = initialState.news.title;
    
    const text = document.createElement('div')
    text.textContent = initialState.news.text
    root.append(header)
    mainDivForNews.append( title, text, renderComments())
    
    section.append(mainDivForNews, render())
    root.append(section, footer)
    
}
}