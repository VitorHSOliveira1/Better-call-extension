images = document.querySelectorAll("img")

function main(){
    for (let img in images){
        img.src = "https://media.moddb.com/cache/images/mods/1/56/55177/thumb_620x2000/bandicam_2022-09-05_20-00-55-025.jpg";
        if (img.className === "ytdTextInputAssistantIcon"){
            img.src = "none"
        }
    }   
}

setInterval(main, 2000);
