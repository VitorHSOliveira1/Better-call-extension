const image = document.querySelectorAll("img")
const divs = document.querySelectorAll("div")
const paragraph = document.querySelectorAll("p")
const aforidn = document.querySelectorAll("a")
const h1 = document.querySelectorAll("h1")
const h2 = document.querySelectorAll("h2")
const h3 = document.querySelectorAll("h3")



setInterval(() => {
    image.forEach(img => {
        img.src = "https://media.moddb.com/cache/images/mods/1/56/55177/thumb_620x2000/bandicam_2022-09-05_20-00-55-025.jpg";
    });
    h1.forEach(h =>{
        h.textContent = "Better Call Saul";
    });
    h2.forEach(h =>{
        h.textContent = "Better Call Saul";
    });
    h3.forEach(h =>{
        h.textContent = "Better Call Saul";
    });
    paragraph.forEach(p =>{
        p.textContent = "Better call saul"
    });
    aforidn.forEach(a =>{
        a.textContent = "Better call saul"
    });
    divs.forEach(div => {
        const backgroundImage = window.getComputedStyle(div).backgroundImage;
        if (backgroundImage.startsWith("url(")) {
           div.style.backgroundImage = "url(https://media.moddb.com/cache/images/mods/1/56/55177/thumb_620x2000/bandicam_2022-09-05_20-00-55-025.jpg)";
        }
    });

}, 2000); 
