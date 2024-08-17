(function() {
    "use-strict";

    /**
     * Window Load Function
    */
    $(window).load(function(){
        $(".btt img").hide();
    });

    /**
     * Window Scroll Function
    */
    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();

        if(scrolling > 80) {
            $(".main-header").addClass("shrink-header")
        }else{
            $(".main-header").removeClass("shrink-header")
        }
    
        if( scrolling > 300){
            $(".btt img").fadeIn(500);
        }
        else{
            $(".btt img").fadeOut(500);
        }
    });
      
    /**
     * 
     * BTT Click Action
    */
    $(".btt img").click(function(){
        $("html, body").animate({
            scrollTop:0
        },500)
    });
})();