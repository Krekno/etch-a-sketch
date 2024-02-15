const container = document.querySelector('#container')

for (let i = 0; i < 256; i++) {
    var div = document.createElement("div");
    div.className = "square";
    div.textContent = "a";
    container.appendChild(div);
}