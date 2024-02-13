const container = document.querySelector('#container')

for (let i = 0; i < 16; i++) {
    var div = document.createElement("div");
    div.className = "square";
    container.appendChild(div);
}