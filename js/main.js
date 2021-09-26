TweenMax.staggerFrom(
    ".navbar > div",
    0.8,
    {
        x: "-80",
        opacity: 0,
        ease: Power3.easeOut,
        delay: .5,
    },
    0.2
);

TweenMax.staggerFrom(
    ".images > div",
    0.8,
    {
        x: "-80",
        opacity: 0,
        ease: Power3.easeOut,
        delay: .5,
    },
    0.2
);

TweenMax.staggerTo(
    ".navbar > div",
    0.8,
    {
        x: "80",
        opacity: 0,
        ease: Power3.easeOut,
        delay: 4,
    },
    0.04
);

TweenMax.staggerTo(
    ".images > div",
    0.4,
    {
        scale: "0",
        opacity: 0,
        ease: Power3.easeOut,
        delay: 4,
    },
    0.04
);

TweenMax.to(
    ".overlay",
    1.2,
    {
        top: "-100%",
        ease: Expo.easeOut,
        delay: 5,
    },
    0.04
);

var textWrapper = document.querySelector(".header");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime.timeline().add({
    targets: ".header .letter",
    translateY: [100, 0],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 4800 + 40 * i,
});