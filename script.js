function defaultResize(){
    $('.main-wrapper').css('height', window.innerHeight + 'px');
    $('.main-wrapper video').css('max-height', window.innerHeight + 'px');
    console.log("ssss");
}

$(window).resize(function(){
    // isLandscape();
    // $('.main-wrapper').css('height', window.innerHeight + 'px');
    // $('.wrapper div video').css('max-height', window.innerHeight + 'px');
    defaultResize();
});


$( document ).ready(function() {
    defaultResize();
    // $("video").removeClass("vjs-tech");
});



$(".main-wrapper .enter-screen > span").click(function () {
    $(".main-wrapper .enter-screen").css("display", "none");
    $(".main-wrapper video").css("display", "block");
    $(".main-wrapper video")[0].play();
});