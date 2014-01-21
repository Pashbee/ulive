
(function($) {
    // Ulive CPU Function - Checks CPU data from dummy url        
    
var usageMethods = {
    cpu: function() {
   
            $.getJSON("../_stuff",
                function(data) {
                    var cpuPercent = data.cpu+"%"
                    $("#cpuload").text(cpuPercent);
                    $("#barwidth").css('width', cpuPercent);    
                });

        }
    };


    setInterval(usageMethods.cpu, 2000);
    usageMethods.cpu()
  
})(jQuery);
