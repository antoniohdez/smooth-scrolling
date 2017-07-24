"use strict";
window.addEventListener("load", function() {
    var links = Array.from( document.querySelectorAll("a[ href^='#' ]") );

    // Smooth scroll for all internal links
    links.forEach(function(link){
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            var targetSelector = this.hash;
            var target = document.querySelector(targetSelector);

            /* Calculate how many pixels to scroll */
            var targetPosition = target.offsetTop;
            var currentPosition = document.body.scrollTop;
            var scrollInPixels = currentPosition - targetPosition;
            
            /* Animate using web-animations polyfill: https://github.com/web-animations/web-animations-js/ */
            var animation = document.body.animate({
                transform: ["none", "translateY(" + scrollInPixels + "px )"]
            }, {
                duration: 500,
                easing: "ease-in-out",
                /*fill: "forwards"*/
            });

            // Since translateY with "fill forwards" may pull content out of the page, we "reset the animation" and scroll manually at the end.
            animation.onfinish = function() {
                document.body.scrollTop = targetPosition;
                window.location.hash = targetSelector;
            };
        });
    });    
});