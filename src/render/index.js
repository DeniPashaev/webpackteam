import { initialState } from "../initialState"


export const render = () => {
    const root = document.querySelector("#root");
    initialState.cats.forEach((cats)=>{
    const div = document.createElement("div")
    div.textContent = cats.name;
    root.append(div)
    })
   
}