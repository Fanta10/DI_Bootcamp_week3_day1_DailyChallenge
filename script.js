let body = document.querySelector('body')
let section = document.querySelector('.listPlanets')
console.log(section);

let table = [ "Mercure", "Venus", "Mars", "Jupiter", "Terre"]
let backgroundColor = ["blue", "green", "pink", "red","orange"]

for (const planete in table) {
    let div = document.createElement('div')
    div.classList.add("planet")
    div.style.backgroundColor = backgroundColor[planete]
    section.appendChild(div)
    
}
