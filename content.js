const image = document.querySelectorAll("img")
const divs = document.querySelectorAll("div")



setInterval(() => {
    image.forEach(img => {
        img.src = "https://media.moddb.com/cache/images/mods/1/56/55177/thumb_620x2000/bandicam_2022-09-05_20-00-55-025.jpg";
        divs.forEach(div => {
           const backgroundImage = window.getComputedStyle(div).backgroundImage;
           if (backgroundImage.startsWith("url(")) {
               div.style.backgroundImage = "url(https://media.moddb.com/cache/images/mods/1/56/55177/thumb_620x2000/bandicam_2022-09-05_20-00-55-025.jpg)";
           }
    });
});
}, 2000); 
