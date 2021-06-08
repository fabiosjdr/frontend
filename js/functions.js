$(document).ready(function(){

    $('#menuMobile').on('click',function(){
        
        if($('.area-menu-lateral').hasClass('menu-mobile')){
            $('.area-menu-lateral').toggleClass('menu-mobile').hide('slow');
            //$('.area-menu-lateral').toggleClass('menu-mobile').hide("slide", { direction: "left" }, 1500);
            //$('.area-menu-lateral').toggleClass('menu-mobile').fadeTo( 500, 0 ).hide();
        }else{
            $('.area-menu-lateral').toggleClass('menu-mobile').show(1000);
           // $('.area-menu-lateral').toggleClass('menu-mobile').fadeTo( 500, 1 );
            
            //$('.area-menu-lateral').show("slide", { direction: "left" }, 1500);
            
        }
        

    });

    $('.shrink').on('click',function(){
        
        $('.menu').toggleClass('shrinked');

        
        
        $('.menu').find('.menu-text').each(function(){

            if($('.menu').hasClass('shrinked')){
                $(this).hide('slow');
            }else{
                $(this).show('slow');
            }
            
        }).promise().done(function(){ 
            
           if(!$('.menu').hasClass('shrinked') ){
               $('#myChart').css({'width' : '100%','height': '100%'},1000)
           }
        });
    });

    $('.menu  a ').hover(
        function(){ $(this).find('.oi').addClass('pulse');},
        function(){ $(this).find('.oi').removeClass('pulse') }
    )

});