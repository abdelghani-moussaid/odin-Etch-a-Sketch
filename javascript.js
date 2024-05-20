const container = document.querySelector("#container");

function createGrid(number){
    for(let i = 0; i < number; i++){
        const div = document.createElement("div");
        div.className = "collection";
        for(let j = 0; j < number; j++){
            const itemDiv = document.createElement("div");
            itemDiv.className = "items";
            div.appendChild(itemDiv);
        }   
        container.appendChild(div);
    }
}

function removeGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
function hoverGrid(){
    const items = document.querySelectorAll(".items");
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            const red = Math.floor(Math.random() * 255);
            const green = Math.floor(Math.random() * 255);
            const blue = Math.floor(Math.random() * 255);
            item.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });   
    });    
}

createGrid(16);
hoverGrid();

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let gridNum = prompt("How many squares per side?");
    if(gridNum > 100){
        alert("Too many squares")
        return;
    } 
    removeGrid();
    createGrid(gridNum);
    hoverGrid();
});

