let heading = document.getElementById("heading");
let para = document.getElementById("para");
let input = document.getElementById("inputText");

let btnText = document.getElementById("btnText");
let btnColor = document.getElementById("btnColor");
let btnSize = document.getElementById("btnSize");
let btnToggle = document.getElementById("btnToggle");

// Change heading text
btnText.addEventListener("click", function () {
    heading.innerText = input.value || "No text entered!";
});

// Change background color randomly
btnColor.addEventListener("click", function () {
    let colors = ["lightblue", "lightgreen", "lightpink", "lightyellow"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Increase font size
btnSize.addEventListener("click", function () {
    let currentSize = window.getComputedStyle(para).fontSize;
    let newSize = parseInt(currentSize) + 2;
    para.style.fontSize = newSize + "px";
});

// Show/Hide paragraph
btnToggle.addEventListener("click", function () {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});