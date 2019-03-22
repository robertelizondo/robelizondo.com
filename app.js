function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d){
        t /= d / 2
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t-2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var toAbout = document.querySelector('.aboutButton')
toAbout.addEventListener('click', function(){
    smoothScroll('.section2', 1000)
});

var toPWorks = document.querySelector('.pWorksButton')
toPWorks.addEventListener('click', function(){
    smoothScroll('.section3', 1000)
});

var toRes = document.querySelector('.resButton')
toRes.addEventListener('click', function(){
    smoothScroll('.section4', 1000)
});

var toContact = document.querySelector('.contactButton')
toContact.addEventListener('click', function(){
    smoothScroll('.section5', 1000)
});
