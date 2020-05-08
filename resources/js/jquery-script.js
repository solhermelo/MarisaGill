$(document).ready(function(){
    // $('.js--mobile-nav-icon').on('click', function(){
    //     $('.main-nav').toggle("fast");
    // });

    $('.js--mobile-nav-1').click(function(){
        $('.dropdown-1').toggle();

        $(document).on("click", function(event){
            var $trigger = $(".js--mobile-nav-1");
            if($trigger !== event.target && !$trigger.has(event.target).length){
                $(".dropdown-1").slideUp("fast");
            }            
        });
    });

    $('.js--mobile-nav-2').click(function(){
        $('.dropdown-2').toggle();

        $(document).on("click", function(event){
            var $trigger = $(".js--mobile-nav-2");
            if($trigger !== event.target && !$trigger.has(event.target).length){
                $(".dropdown-2").slideUp("fast");
            }            
        });
    });

});

