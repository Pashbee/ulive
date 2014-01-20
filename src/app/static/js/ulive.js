$(function($) {
            
    function cpu_update() {
   
            $.getJSON("../_stuff",
                function(data) {
                    $("#cpuload").text(data.cpu+" %")
                    $("#ram").text(data.ram+" %")
                    $("#disk").text(data.disk+" %")
                });
        }
    setInterval(cpu_update, 2000);
    cpu_update();
  
});

