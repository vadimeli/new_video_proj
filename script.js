function defaultResize(){
    $('.main-wrapper').css('height', window.innerHeight + 'px');
    // $('.main-wrapper video').css('max-height', window.innerHeight + 'px');
    $('.wrapper div video').css('max-height', window.innerHeight + 'px');
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
    $(".wrapper #vid-1").css("display", "block");
    $(".wrapper #vid-1 video")[0].play();


    let myInterval = setInterval(myTimer, 1000);

    function myTimer() {
        console.log("time", $("#vid-1 video")[0].currentTime);
        if($(".wrapper #vid-1 video")[0].currentTime>=11){
            $(".wrapper #vid-1 video")[0].pause();
            $(".question-1").css('display', 'flex');
            myStopFunction();
        }
    }

    function myStopFunction() {
        clearInterval(myInterval);
    }


});



// Q - 1
$(".question-1 > div > div > .answers > div").click(function () {
   if($(this).data('answer') == true){
       $(this).css('background-color', '#39e847')
   } else {
       $(".question-1 > div > div > .answers > div").each(function () {
           if($(this).data('answer') == true){
               $(this).css('background-color', '#39e847')
           } else {
               $(this).css('background-color', '#ff0018')
           }
       })
   }
});