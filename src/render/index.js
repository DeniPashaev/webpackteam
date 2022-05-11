import { getCatsByNews } from "../getCatsByNews";
import { initialState } from "../initialState"



export const render = () => {
    root.textContent = ""
    const root = document.querySelector("#root");
    if(Array.isArray(initialState.cats)) {
    initialState.cats.forEach((cats)=>{
    const divCats = document.createElement("div")
    divCats.textContent = cats.name;
    divCats.addEventListener("click", () => getCatsByNews(cats.id))
    root.append(divCats)
    }) 
}
return divCats
// else {
//     root.textContent = "" //завершить
    // .addEventListener
}