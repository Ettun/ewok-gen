define(function () {
    return {
    	cowlColors: [
    		["rgba(210,140,40,1)", "rgba(162,92,30,1)"], // orange
    		["rgba(200,191,231,1)", "rgba(153,136,210,1)"], // lavender
            ["rgba(235,191,101,1)", "rgba(227,167,40,1)"], // goldenrod
            ["rgba(150,14,17,1)", "rgba(100,9,11,1)"], // maroon  
            ["rgba(13,118,10,1)", "rgba(9,74,6,1)"], // green  
            ["rgba(226,224,220,1)", "rgba(210,207,202,1)"] // linen
    		],
    	furColors: [
    		["rgba(173,102,71,1)", "rgba(131,78,54,1)"], // brown
    		["rgba(195,195,195,1)", "rgba(128,128,128,1)"], // grey
            ["rgba(253,244,193,1)", "rgba(252,238,163,1)"], // cream
            ["rgba(42,42,42,1)", "rgba(20,20,20,1)"], // black
            ["rgba(189,90,77,1)", "rgba(155,70,57,1)"] // vulpine
    		],
    	undercoatColors: [
			["rgba(236,222,198,1)", "rgba(220,194,152,1)"], //tan
			["rgba(109,50,39,1)", "rgba(67,31,24,1)"], // red-brown
            ["rgba(64,64,64,1)", "rgba(135,135,135,1)"], // dark
            ["rgba(234,219,228,1)", "rgba(211,180,199,1)"], // rose
            ["rgba(184,173,131,1)", "rgba(165,151,97,1)"] // copper
    		],
        cowlColor: function () {
        	var cowl = this.cowlColors[Math.floor(Math.random() * this.cowlColors.length)];
            return {
            	color: cowl[0],
            	fringe: cowl[1]
            }
        },
        furColor: function () {
        	var fur = this.furColors[Math.floor(Math.random() * this.furColors.length)];
            return {
            	color: fur[0],
            	fringe: fur[1]
            }
        },
        undercoatColor: function () {
        	var undercoatColors = this.undercoatColors[Math.floor(Math.random() * this.undercoatColors.length)];
            return {
            	color: undercoatColors[0],
            	fringe: undercoatColors[1]
            }
        }
    };
});