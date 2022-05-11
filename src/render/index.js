import { getCatsByNews } from "../getCatsByNews";
import { initialState } from "../initialState"



export const render = () => {

    const root = document.querySelector("#root");

    const newsList = document.createElement("div");

    if(Array.isArray(initialState.cats)) {

    initialState.cats.forEach((cats)=> {
       // console.log(cats);
    const divCats = document.createElement("div")
    const text = document.createElement("a")
    text.id = "Cats"
    text.href = "#0"
    text.textContent = cats.name;
    divCats.append(text)
    divCats.addEventListener("click", () => getCatsByNews(cats._id))
    newsList.append(divCats);
    })
    return newsList
}
// else {
//     root.textContent = "" //завершить
    // .addEventListener
}