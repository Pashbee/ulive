
(function($) {
    // Ulive CPU Function - Checks CPU data from dummy url        
    
var usageMethods = {
    cpu: function() {
   
            $.getJSON("../_stuff",
                function(data) {
                    $("#cpuload").text(data.cpu+" %")
                    
                });
        }
    };
    setInterval(usageMethods.cpu, 2000);
    usageMethods.cpu()
  
})(jQuery);
