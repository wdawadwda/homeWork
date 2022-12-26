//! Fixed Hider
//!_______________________________________________________
$(function() { 

    let nav = $("#nav-fixed");
    let bg = $("#header__bg");
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function(){
        let bgH = bg.innerHeight();
        scrollPos = $(this).scrollTop();
        if (scrollPos > bgH) {
            nav.addClass('flex');
        } else {
            nav.removeClass('flex');
        }
    });
});

//! Burger
//!_______________________________________________________

let nav = $("#nav-fixed__link-wrapper")
let burger = $("#burger-wrapper")

burger.on("click", function(event) {
    event.preventDefault();
    nav.toggleClass("show");
});