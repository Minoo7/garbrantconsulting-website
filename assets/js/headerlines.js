// init controller
var controller = new ScrollMagic.Controller();

$(window).load(function(){

    //------------------------------------------------ Home -----------------------------------------------\\

    var animateElem_home = document.getElementById("toggle_home");
    var scene_home = new ScrollMagic.Scene({triggerElement: "#trigger_home", duration: 760})
    .on("enter", function () {
        // trigger
        animateElem_home.classList.add("dlines");
    })
    .on("leave", function () {
        // remove class
        animateElem_home.classList.remove("dlines");
    })
    .addTo(controller);

    //----------------------------------------------- About -----------------------------------------------\\

    var animateElem_about = document.getElementById("toggle_about");
    var scene_about = new ScrollMagic.Scene({triggerElement: "#trigger_about", duration: 570})
    .on("enter", function () {
        // trigger
        animateElem_about.classList.add("dlines");
        window.location.hash = "about";
    })
    .on("leave", function () {
        // remove class
        animateElem_about.classList.remove("dlines");
    })
    .addTo(controller);

    //--------------------------------------------- Services ----------------------------------------------\\

    var animateElem_services = document.getElementById("toggle_services");
    var scene_services = new ScrollMagic.Scene({triggerElement: "#trigger_services", duration: 555})
    .on("enter", function () {
        // trigger
        animateElem_services.classList.add("dlines");
        window.location.hash = "services";
    })
    .on("leave", function () {
        // remove class
        animateElem_services.classList.remove("dlines");
    })
    .addTo(controller);

    //---------------------------------------------- Method -----------------------------------------------\\

    var animateElem_method = document.getElementById("toggle_method");
    var scene_method = new ScrollMagic.Scene({triggerElement: "#trigger_method", duration: 515})
    .on("enter", function () {
        // trigger
        animateElem_method.classList.add("dlines");
        window.location.hash = "method";
    })
    .on("leave", function () {
        // remove class
        animateElem_method.classList.remove("dlines");
    })
    .addTo(controller);

    //--------------------------------------------- Contact ------------------------------------------------\\

    var animateElem_contact = document.getElementById("toggle_contact");
    var scene_contact = new ScrollMagic.Scene({triggerElement: "#trigger_contact", duration: 555})
    .on("enter", function () {
        // trigger
        animateElem_contact.classList.add("dlines");
        window.location.hash = "contact";
    })
    .on("leave", function () {
        // remove class
        animateElem_contact.classList.remove("dlines");
    })
    .addTo(controller);
});