const container = document.querySelector("#container");

for(let i = 0; i < 16; i++){
    const div = document.createElement("div");
    div.className = "collection";
    for(let j = 0; j < 16; j++){
        const itemDiv = document.createElement("div");
        itemDiv.className = "items";
        div.appendChild(itemDiv);
    }   
    container.appendChild(div);
}