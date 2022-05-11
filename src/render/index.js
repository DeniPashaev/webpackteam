import { getCatsByNews } from "../getCatsByNews";
import { initialState } from "../initialState"



export const render = () => {

    const root = document.querySelector("#root");

    const newsList = document.createElement("div");

    if(Array.isArray(initialState.cats)) {

    initialState.cats.forEach((cats)=> {
       // console.log(cats);
    const divCats = document.createElement("a")
    divCats.id = "Cats"
    divCats.href = "#0"
    divCats.textContent = cats.name;
    
    divCats.addEventListener("click", () => getCatsByNews(cats._id))
    newsList.append(divCats);
    })
    return newsList
}
// else {
//     root.textContent = "" //завершить
    // .addEventListener
}