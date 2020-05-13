function defaultResize(){
    $('.main-wrapper').css('height', window.innerHeight + 'px');
    $('.wrapper div video').css('max-height', window.innerHeight + 'px');
}

$(window).resize(function(){
    defaultResize();
});


$( document ).ready(function() {
    defaultResize();
});



$(".main-wrapper .enter-screen > span").click(function () {
    $(".main-wrapper .enter-screen").css("display", "none");
    $(".wrapper #vid-1").css("display", "block");
    $(".wrapper #vid-1 video")[0].play();


    let myInterval = setInterval(myTimer, 1000);

    function myTimer() {
        if($(".wrapper #vid-1 video")[0].currentTime>=3){
            $(".wrapper #vid-1 video")[0].pause();
            $(".question-1").css('display', 'flex');
            myStopFunction();
        }
    }

    function myStopFunction() {
        clearInterval(myInterval);
    }


});


function continueVideoPlay(qNumber) {
    let myNumber = parseInt(qNumber);
    switch(myNumber) {
        case 1:
            $(".question-1").css('display', 'none');
            playVideoWithTimeCount(myNumber+1, 5);
            break;
        case 2:
            $(".question-2").css('display', 'none');
            playVideoWithTimeCount(myNumber+1, 7);
            break;
        default:
            $(".question-"+myNumber).css('display', 'none');
            $(".wrapper #vid-1 video")[0].play();
    }
}


function playVideoWithTimeCount(qNumber, time) {
    console.log("qNumber", qNumber);
    console.log("time", time);
    $(".wrapper #vid-1 video")[0].play();
    let myInterval = setInterval(myTimer, 1000);

    function myTimer() {
        if($(".wrapper #vid-1 video")[0].currentTime>=time){
            $(".wrapper #vid-1 video")[0].pause();
            $(".question-"+qNumber).css('display', 'flex');
            myStopFunction();
        }
    }

    function myStopFunction() {
        clearInterval(myInterval);
    }

}



// ===
var isAnswered = false;


$(".close-q").click(function () {
    let qNumber = $(this).data('question');
    if(isAnswered === true){
        // $(".question-1").css('display', 'none');
        // $(".wrapper #vid-1 video")[0].play();
        continueVideoPlay(qNumber);
        isAnswered = false
    } else {
        alert("להמשך יש לענות על השאלה")
    }
});

// Q - 1
$(".question-1 > div > div > .answers > div").click(function () {
    isAnswered = true;
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

// Q - 2
$(".question-2 > div > div > .answers > div").click(function () {
    isAnswered = true;
    if($(this).data('answer') == true){
        $(this).css('background-color', '#39e847')
    } else {
        $(".question-2 > div > div > .answers > div").each(function () {
            if($(this).data('answer') == true){
                $(this).css('background-color', '#39e847')
            } else {
                $(this).css('background-color', '#ff0018')
            }
        })
    }
});




// Q - 3
$( ".draggable").draggable();






