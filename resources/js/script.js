$(document).ready(function(){
    $('.js--mobile-nav-icon').on('click', function(){
        $('nav').toggle("");
    });

    $('.js--mobile-nav-1').click(function(){
        $('.dropdown-1').toggle();
    });
    
    $(document).on("click", function(event){
        var $triggerDos = $(".js--mobile-nav-2");
        if($triggerDos !== event.target && $triggerDos.has(event.target).length){
            $(".dropdown-1").slideUp("");
        }            
    });

    $('.js--mobile-nav-2').click(function(){
        $('.dropdown-2').toggle();
    });

    $(document).on("click", function(event){
        var $triggerDos = $(".js--mobile-nav-1");
        if($triggerDos !== event.target && $triggerDos.has(event.target).length){
            $(".dropdown-2").slideUp("");
        }             
    });

});

