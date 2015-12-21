define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var wicket = require('./bodies/wicket');
    var deej = require('./bodies/deej');
    var nanta = require('./bodies/nanta');
    var colors = require('./colors');
    var stats = require('./stats')
    var $ = require('jquery');



    var generateEwok = function() {
        var cowl = colors.cowlColor();
        var fur = colors.furColor();
        var undercoat = colors.undercoatColor();

        var bodies = [wicket, deej, nanta]
        var selectedBody = bodies[Math.floor(Math.random() * bodies.length)];
        stats.reroll();
        selectedBody.getBody(cowl, fur, undercoat);
    };

    generateEwok();
    
    $('.regenerate').on('click', () => {
        generateEwok();
    })
});
