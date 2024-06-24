function createCard(title, channel_name, views, monthsOld, duration, thumbnail) {
    let viewsStr;
    if(views < 1000) {
        viewsStr = views/1000;
    }
    else if(views > 1000000) {
        viewsStr = views/1000000 + "M";
    }
    else {
        viewsStr = views/1000 + "K";
    }

    let html = `<div class="card">
            <div class="thumbnail">
                <img src="${thumbnail}" alt="cat image">
                <div class="capsule">${duration}</div>
            </div>
            <div class="texts">
                <h2>${title}</h2>
                <p>${channel_name} . ${viewsStr} . ${monthsOld} months ago</p>
            </div>
        </div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard("Introduction to Web Development #1", "PocoLoco", 750000, 2, "28:03", "https://as2.ftcdn.net/v2/jpg/02/66/72/41/1000_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg")

// to create new elements

// createCard("hey there!", "LocoPoco", 12500000, 6, "23:09", "https://as2.ftcdn.net/v2/jpg/02/66/72/41/1000_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg")