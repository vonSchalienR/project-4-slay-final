$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.nav').addClass("stikcy");
        }else{

        }
    });
    $('.menu-btns').click(function(){
        $('.nav .menu').toggleClass("active");
        $('.menu-btns i').toggleClass("active");
    })
});