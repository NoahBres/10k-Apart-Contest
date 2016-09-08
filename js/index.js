function lazyLoad() {
    for (var a = document.getElementsByClassName("l"), b = 0; b < a.length; b++) ! function(b) {
        setTimeout(function() {
            a[b].style.background += "url(" + a[b].getAttribute("data-img") + ")  no-repeat center center", a[b].style.backgroundSize = "cover"
        }, 0)
    }(b)
}

function scrollListen(a) {
    var b = window.getComputedStyle(document.getElementById("title"), null).getPropertyValue("padding-top").slice(0, -2),
        c = document.getElementById("title").getBoundingClientRect(),
        d = document.getElementById("n").getBoundingClientRect();
    c.top + b - d.bottom < 0 ? document.getElementById("n").className = "n flexme dark" : document.getElementById("n").className = "n flexme"
}! function() {
    window.addEventListener ? window.addEventListener("scroll", scrollListen, !1) : window.attachEvent && window.addEventListener("scroll", scrollListen), lazyLoad(), scrollListen()
}();