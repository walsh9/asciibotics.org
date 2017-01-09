---
---
(function () {
    // If we have js, reveal cool stuff
    var enhancements = document.querySelectorAll(".extra");
    var body = document.querySelector("body");

    for (var i = 0; i < enhancements.length; ++i) {
        enhancements[i].classList.remove("extra"); 
    }

    // toggle between night and day modes
    var toggleMode = function(event) {
        console.log(body.class);
        if (body.getAttribute("class") === "day") {
            body.setAttribute("class", "night");
            window.location.hash = "#night"
        } else {
            body.setAttribute("class", "day");
            window.location.hash = "#day";
        }
    };

    //go to the page for a random bot
    var botUrls = [{% for bot in site.bots %}"{{bot.url}}"{% unless forloop.last %},{% endunless %}{% endfor %}];

    var goToRandomBot = function() {
        var randomBotIndex = Math.floor( Math.random() * botUrls.length );
        window.location.href = botUrls[randomBotIndex];
    }

    //attach functions to buttons;
    document.querySelector("[data-action='toggle-mode']").addEventListener("click", toggleMode);
    document.querySelector("[data-action='random-bot']").addEventListener("click", goToRandomBot);


    // #night
    if (window.location.hash === "#night") {
         body.setAttribute("class", "night");
    }
})();
