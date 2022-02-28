function readMore() {
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let btn = document.getElementById("btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "Открыть отзыв";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "Закрыть отзыв";
        more.style.display = "inline";
    }
}

function readMore1() {
    let dots1 = document.getElementById("dots1");
    let more1 = document.getElementById("more1");
    let btn1 = document.getElementById("btn1");

    if (dots1.style.display === "none") {
        dots1.style.display = "inline";
        btn1.innerHTML = "Открыть отзыв";
        more1.style.display = "none";
    } else {
        dots1.style.display = "none";
        btn1.innerHTML = "Закрыть отзыв";
        more1.style.display = "inline";
    }
}

function readMore2() {
    let dots2 = document.getElementById("dots2");
    let more2 = document.getElementById("more2");
    let btn2 = document.getElementById("btn2");

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btn2.innerHTML = "Открыть отзыв";
        more2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btn2.innerHTML = "Закрыть отзыв";
        more2.style.display = "inline";
    }
}