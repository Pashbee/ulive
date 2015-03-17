var usageMethods = {

	cpu:	function() {

            $.getJSON("../_stuff",
                function(data) {
                    var cpuPercent = data.cpu+"%"
                    $("#cpuload").text(cpuPercent);
                    $("#barwidth").css('width', cpuPercent);
                });
		}

    };

(function callJSON() {
	usageMethods.cpu();
    setTimeout(	callJSON, 500);
})();