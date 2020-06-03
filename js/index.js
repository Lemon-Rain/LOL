window.onscroll = function () {
    if (window.scrollY > 50) {
        document.querySelector("header").className = "small pr";
    }
}

function subNavDown() {
    var subNav = document.querySelector(".head_sub_nav");
    subNav.className = "head_sub_nav pa show";
}

function subNavUp() {
    var subNav = document.querySelector(".head_sub_nav");
    subNav.className = "head_sub_nav pa hide";
}

function searchClose() {
    var search = document.querySelector(".hover_search");
    search.style.display = "none";
}

function searchOpen() {
    var search = document.querySelector(".hover_search");
    search.style.display = "block";
}

function display(name, model) {
    var el = document.querySelector(name);
    if (model == 'show') {
        el.style.display = block;
    } else {
        el.style.display = none;
    }
}