
function createCard(title, cName, views, monthsOld, duration, thumbnail){

    let viewStr;
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }

    let div = document.createElement("div");
    div.setAttribute("class", "card");
    div.setAttribute(
        "style",
        "background-color: white; border-radius: 20px; width: 40vw; height: 15vh; padding: 10px; display: flex; align-items: center"
    );

    document.querySelector(".container").append(div);


    let html = `<div class="card">
                    <div class="image">
                        <img src="${thumbnail}"
                            alt="">
                        <div class="capsule">${duration}</div>
                    </div>
                    <div class="text">
                        <h3>${title}</h3>
                        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
                    </div> 
                </div>`

    div.innerHTML = html;

    document.querySelector(".container").appendChild(div);

}


createCard("They thought they could WIN... (Bedwars Doubles)", "The Mythical Pro", 409, 9, "7:36", "../media/bedduo.png")
createCard("Legends Never Die A Minecraft Montage", "The Mythical Pro", 945, 24, "2:50", "../media/thumb-montage.png")
