
$(document).ready(function(){
    
    $( window ).scroll(function() {
        $(".cn-home__header").toggleClass("fix-header", $(window).scrollTop() > $(window).height() - 140);
        $(".cn-home__wrapper").toggleClass("fix-header-responsive", $(window).scrollTop() > $(window).height());
        $(".cn-home__header").removeClass("expand");
    });
    
    $(".cn-home__menu-button").click(function(){
        $(".cn-home__header").toggleClass("expand");
    });
    
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a.cn-home__header__nav__link[href^="#"]').on('click', function (e) {
        
        e.preventDefault();
        
        var headerHeight = $(".cn-home__header").height();
        
        $(document).off("scroll");
        
        $('a.cn-home__header__nav__link').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-headerHeight+75
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    
});

function onScroll(event){
    
    $('a.cn-home__header__nav__link').removeClass("active");
    
    var scrollPos = $(document).scrollTop();
    
    var headerHeight = $(".cn-home__header").height()-75;
    
    console.log($("#registeration")[0].getBoundingClientRect().top <= headerHeight);
    
    if($("#sponsors")[0].getBoundingClientRect().top <= headerHeight){
        $("#sponsors_head").addClass("active");
    }
    else if($("#program")[0].getBoundingClientRect().top <= headerHeight){
        $("#program_head").addClass("active");
    }
    else if($("#registeration")[0].getBoundingClientRect().top <= headerHeight){
         $("#registeration_head").addClass("active");
    }
    else{
        $("#coronation_head").addClass("active");
    }
    
}