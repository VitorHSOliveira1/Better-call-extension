image = document.querySelectorAll("img")
divs = document.querySelectorAll("div")

function fixiconyt(){
    if (img.className === "ytdTextInputAssistantIcon"){
            img.src = "//www.gstatic.com/inputtools/images/tia.png"
    }
}

setInterval(() => {
    image.forEach(img => {
        
        img.src = "https://media.moddb.com/cache/images/mods/1/56/55177/thumb_620x2000/bandicam_2022-09-05_20-00-55-025.jpg";
        fixiconyt()
        divs.forEach(div => {
           const backgroundImage = window.getComputedStyle(div).backgroundImage;
           if (backgroundImage.startsWith("url(")) {
               div.style.backgroundImage = "url(https://media.moddb.com/cache/images/mods/1/56/55177/thumb_620x2000/bandicam_2022-09-05_20-00-55-025.jpg)";
           }
    });
}, 2000);
}, 1000); 
setInterval(() => {
    image.forEach(img => { 
        img.src = "https://media.moddb.com/cache/images/mods/1/56/55177/thumb_620x2000/bandicam_2022-09-05_20-00-55-025.jpg";
        if (img.className === "ytdTextInputAssistantIcon"){
            img.src = "none"
        }
        });
}, 2000);