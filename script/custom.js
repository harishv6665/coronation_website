
$(document).ready(function(){
    
    $( window ).scroll(function() {
        $(".cn-home__header").toggleClass("fix-header", $(window).scrollTop() > $(window).height() - 140);
        $(".cn-home__wrapper").toggleClass("fix-header-responsive", $(window).scrollTop() > $(window).height());
        $(".cn-home__header").removeClass("expand");
    });
    
    $(".cn-home__menu-button").click(function(){
        $(".cn-home__header").toggleClass("expand");
    });
    
//    $('a.cn-home__header__nav__link[href^="#"]').click(function() {
//        $('html,body').animate({ scrollTop: $(this.hash).offset().top-50}, 700);
//        return false;
//        e.preventDefault();
//    });
    
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.cn-home__header__nav__link[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.cn-home__header__nav__link').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-60
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.cn-home__header__nav__link').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos-150) {
            $('.cn-home__header__nav__link').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}