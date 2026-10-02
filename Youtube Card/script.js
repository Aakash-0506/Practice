function createCard(title, cName, views, monthOld, duration, thumbnail) {
    let viewStr 
    if(views < 1000000){
         viewStr = views / 1000+"K";

    }
    else if(views >100000){
         viewStr = views/1000000 +"M";
    }
    else{
         viewStr = view/1000 +"K";
    }
  let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                    <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthOld} months ago</p>

            </div>
        </div>`;
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard(
  "Introduction of Backend | Sigma Web Dev Video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw",
);
