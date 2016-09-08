function lazyLoad() {
	var nodelist = document.getElementsByClassName("lazyme");

	for(var i = 0; i < nodelist.length; i++) {
		(function(i) {
			setTimeout(function() {
				nodelist[i].style.background += "url(" + nodelist[i].getAttribute("data-img") + ") " + " no-repeat center center";
				nodelist[i].style.backgroundSize = "cover";
			}, 0);
		})(i);
	}
}

function scrollListen(e) {
    var titlepadding = window.getComputedStyle(document.getElementById("title"), null).getPropertyValue('padding-top').slice(0, -2);
    var titlerect = document.getElementById("title").getBoundingClientRect(),
        navrect = document.getElementById("nav").getBoundingClientRect();
    if(titlerect.top + titlepadding - navrect.bottom < 0)
        document.getElementById("nav").className = "nav flexme dark";
    else
        document.getElementById("nav").className = "nav flexme";
}

(function() {
	if(window.addEventListener)
	    window.addEventListener("scroll", scrollListen, false);
	else if(window.attachEvent)
	     window.addEventListener("scroll", scrollListen);

	lazyLoad();
	scrollListen();
})();