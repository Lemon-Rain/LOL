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
window.onload = window.scroll;

function toScroll(n) {
    window.scrollTo({
        top: n,
        behavior: "smooth",
    });
}

function fun() {
    var polo = document.querySelector('.top_nav');
    polo.className = 'top_nav show';
}

window.onscroll = function() {
    var Y = window.scrollY;
    var bar = this.document.querySelector('.rightnav_bar');
    var polo = document.querySelector('.top_nav');

    if (Y > 50) {
        document.querySelector("header").className = "small pr";
    }
    // console.log('当前距离顶部' + Y + 'px');

    if (Y >= 300) {
        bar.style.height = '364px';
        if (document.querySelector('.top_nav.show') == null) {
            setTimeout(function () {
                polo.className = 'top_nav show'
            }, 100);
        }
    } else {
        bar.style.height = '304px';
        if (document.querySelector('.top_nav.show') != null) {
            setTimeout(function () {
                polo.className = 'top_nav'
            }, 600);
        }
    }

    var nav_list = document.querySelectorAll('.rightnav_bar li');
    if (Y < 300) {
        clearClass(nav_list, -1);
    } else if (Y >= 300 && Y < 1200) {
        nav_list[0].classList.add('on');
        clearClass(nav_list, 0);
    } else if (Y >= 1200 && Y < 1700) {
        nav_list[1].classList.add('on');
        clearClass(nav_list, 1);
    } else if (Y >= 1700 && Y < 2500) {
        nav_list[2].classList.add('on');
        clearClass(nav_list, 2);
    } else if (Y >= 2500 && Y < 3100) {
        nav_list[3].classList.add('on');
        clearClass(nav_list, 3);
    } else if (Y >= 3100) {
        nav_list[4].classList.add('on');
        clearClass(nav_list, 4);
    }
}

function clearClass(list, n) {
    for (var i = 0; i < list.length; i++) {
        if (i != n) {
            list[i].classList.remove('on');
        }
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
    if (name == '.hot_album') {
        var wrapper = document.querySelector('.hot_album').querySelector(".content_item.selected").querySelector('.swiper-wrapper');
        wrapper.removeChild(wrapper.firstChild);
        wrapper.removeChild(wrapper.firstChild);
        wrapper.removeChild(wrapper.firstChild);
        wrapper.removeChild(wrapper.lastChild);
        wrapper.removeChild(wrapper.lastChild);
        wrapper.removeChild(wrapper.lastChild);
        this.programSwiper.destroy();
        this.programSwiper = new Swiper('#swiper' + (n + 1), {
            slidesPerView: 3,
            slidesPerGroup: 3,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            loop: true,
            simulateTouch: false,
        });
        //左右按钮
        document.querySelector('.btn_left').onclick = this.programSwiper.swipePrev;
        document.querySelector('.btn_right').onclick = this.programSwiper.swipeNext;
    }

    if (name == '.match_center' && n != 1) {
        var i = n == 0 ? 0 : 1;
        // console.log("i:" + i);

        this.programSwiper2.destroy();
        this.programSwiper2 = new Swiper('#swiper' + (i + 8), {
            slidesPerView: 5,
            slidesPerGroup: 5,
            autoplayDisableOnInteraction: false,
        });
        document.querySelector('#swiper' + (i + 8) + ' .btn_match_left').onclick = this.programSwiper2.swipePrev;
        document.querySelector('#swiper' + (i + 8) + ' .btn_match_right').onclick = this.programSwiper2.swipeNext;

        var bar = document.querySelector('#swiper' + (i + 10) + ' .swiper-scrollbar');
        bar.innerHTML = '';
        this.rankSwiper.destroy();
        this.rankSwiper = new Swiper('#swiper' + (i + 10), {
            scrollContainer: true,
            mode: 'vertical',
            freeMode: true,
            freeModeFluid: true,
            preventLinks: true,
            grabCursor: true,
            cssWidthAndHeight: true,
            mousewheelControl: true,
            scrollbar: {
                container: '#swiper' + (i + 10) + ' .swiper-scrollbar',
                hide: false,
                draggable: true,
                snapOnRelease: true
            }
        });
        scrollbarInit(this.rankSwiper);
    }

    var tabList = document.querySelector(name).querySelector('.tab').querySelectorAll('.item');
    var contentList = document.querySelector(name).querySelector('.tab_content').querySelectorAll('.content_item')
    for (var i = 0; i < tabList.length; i++) {
        if (i == n) {
            tabList[i].className = 'item selected';
            contentList[i].className = 'swiper-container content_item selected';
        } else {
            tabList[i].className = 'item';
            contentList[i].className = 'swiper-container content_item';
        }
    }
}


function scrollbarInit(el) {
    initTimer = setTimeout(function () {
        el.reInit();
        el.resizeFix();
        el.resize();
    }, 200);
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
        }
    }
}

window.onload = function () {
    this.programSwiper = new Swiper('#swiper1', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true,
        simulateTouch: false,
    });
    document.querySelector('.btn_left').onclick = this.programSwiper.swipePrev;
    document.querySelector('.btn_right').onclick = this.programSwiper.swipeNext;

    this.programSwiper2 = new Swiper('#swiper8', {
        slidesPerView: 5,
        slidesPerGroup: 5,
        autoplayDisableOnInteraction: false,
    });
    document.querySelector('#swiper8 .btn_match_left').onclick = this.programSwiper2.swipePrev;
    document.querySelector('#swiper8 .btn_match_right').onclick = this.programSwiper2.swipeNext;

    this.rankSwiper = new Swiper('#swiper10', {
        scrollContainer: true,
        mode: 'vertical',
        freeMode: true,
        freeModeFluid: true,
        preventLinks: true,
        grabCursor: true,
        cssWidthAndHeight: true,
        mousewheelControl: true,
        scrollbar: {
            container: '#swiper10 .swiper-scrollbar',
            hide: false,
            draggable: true,
            // snapOnRelease: true
        }
    });

    this.heroSwiper = new Swiper('#swiper12', {
        scrollContainer: true,
        mode: 'vertical',
        preventLinks: true,
        grabCursor: true,
        cssWidthAndHeight: true,
        mousewheelControl: true,
        scrollbar: {
            container: '.hero_centainer>.scrollbar',
            hide: false,
            draggable: true
        }
    });

    this.partnerSwiper = new Swiper('#swiper13', {
        scrollContainer: true,
        mode: 'vertical',
        preventLinks: true,
        grabCursor: true,
        cssWidthAndHeight: true,
        mousewheelControl: true,
        scrollbar: {
            container: '.partner_list>.scrollbar',
            hide: false,
            draggable: true
        }
    });

    var ul_list = document.querySelector('.hot_album').querySelectorAll('.swiper-wrapper');
    for (var i = 0; i < ul_list.length; i++) {
        var lis = ul_list[i].querySelectorAll('li');
        var n = lis.length;
        ul_list[i].style.width = n * 171 + 'px'
        // console.log(ul_list[i].style.width);
    }
    var ul_list = document.querySelector('.match_center').querySelectorAll('.swiper-wrapper');
    for (var i = 0; i < ul_list.length; i++) {
        var lis = ul_list[i].querySelectorAll('li');
        var n = lis.length;
        ul_list[i].style.width = n * 275 + 'px'
        // console.log(ul_list[i].style.width);
    }
}

function selectHeroType(n) {
    var tabList = document.querySelectorAll('.hero_type_tab .item');
    var contentList = document.querySelectorAll('.hero_wrapper');
    for (var i = 0; i < tabList.length; i++) {
        if (i == n) {
            tabList[i].className = 'item selected';
            contentList[i].className = 'hero_wrapper swiper-wrapper selected';
        } else {
            tabList[i].className = 'item';
            contentList[i].className = 'hero_wrapper';
        }
    }
    document.querySelector('.hero_centainer .scrollbar').innerHTML = '';
    this.heroSwiper.destroy();
    this.heroSwiper = new Swiper('#swiper12', {
        scrollContainer: true,
        mode: 'vertical',
        preventLinks: true,
        grabCursor: true,
        cssWidthAndHeight: true,
        mousewheelControl: true,
        scrollbar: {
            container: '.hero_centainer>.scrollbar',
            hide: false,
            draggable: true
        }
    });
    scrollbarInit(this.heroSwiper);
}

function showPartner() {
    setTimeout(function () {
        scrollbarInit(this.partnerSwiper);
    }, 1)
}