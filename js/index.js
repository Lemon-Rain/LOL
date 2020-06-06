function resize() {
    var minWidth = 1246;
    var maxWidth = 1358 + 16 + 42;
    var screenW = window.innerWidth;
    var scaleW, scaleV;
    var zoomBox = document.querySelector('main');
    if (screenW > minWidth && maxWidth > screenW) {
        scaleW = screenW;
    } else if (screenW <= minWidth) {
        scaleW = minWidth;
    } else {
        scaleW = maxWidth;
    }
    scaleV = scaleW / maxWidth;
    zoomBox.style.zoom = scaleV;
}

window.onresize = resize;

window.onload = resize;

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

var sleep = function (time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while (new Date().getTime() < startTime) {}
};

function display(name, model) {
    var el = document.querySelector(name);
    if (model == 'show') {
        el.style.display = "block";
    } else {
        sleep(100);
        el.style.display = "none";
    }
}

function show(name, model) {
    var el = document.querySelector(name);
    if (model == 'show') {
        el.id = "show";
    } else {
        el.id = "";
    }
}

var promoIndex = 0;

function startRotate() {
    rotateTimer = setInterval("Rotate()", 3000);
}
startRotate();

function stopRotate() {
    clearTimeout(rotateTimer);
}

function setPromoIndex(n) {
    stopRotate();
    promoIndex = n;
    Rotate();
}

function Rotate() {
    var img = document.querySelector('.promo_img_list');
    img.style.marginLeft = promoIndex * -820 + 'px';
    var navList = document.querySelector('.promo_nav').querySelectorAll('.item');
    for (var i = 0; i < navList.length; i++) {
        if (i == promoIndex) {
            navList[i].className = 'item selected';
        } else {
            navList[i].className = 'item';
        }
    }
    promoIndex++;
    promoIndex %= 5;
}

function select(name, n) {
    if (name == '.new_video') {
        var a = document.querySelector(name).querySelector('.change_batch');
        var span = a.querySelector('span');
        var i = a.querySelector('i');
        if (n == 0) {
            span.innerText = '换一批'
            i.className = 'icon_refresh'
        } else {
            span.innerText = '下一页'
            i.className = 'icon_next'
        }
    }
    var tabList = document.querySelector(name).querySelector('.tab').querySelectorAll('.item');
    var contentList = document.querySelector(name).querySelector('.tab_content').querySelectorAll('.content_item')
    for (var i = 0; i < tabList.length; i++) {
        if (i == n) {
            tabList[i].className = 'item selected';
            contentList[i].className = 'content_item selected';
        } else {
            tabList[i].className = 'item';
            contentList[i].className = 'content_item';
        }
    }
}

function update_progress(event, el) {
    var max_index = 8;
    var progress = el.querySelector('.progress_bar_inner');
    var img = el.querySelector('.video_pre_img');
    var X = event.clientX - el.offsetLeft - 4;
    var index = Math.ceil(X / 23);
    if (index <= max_index) {
        progress.style.width = index * 23 + 'px';
        if (index != 0) {
            var src = img.getAttribute('src');
            src = src.substr(0, 23) + index + src.substr(24, src.length);
            img.src = src;
            // console.log(src);
        }
    }
    // console.log('X:' + X + '  index:' + index);

}