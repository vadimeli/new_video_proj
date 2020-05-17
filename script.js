function defaultResize(){
    $('.main-wrapper').css('height', window.innerHeight + 'px');
    $('.wrapper div video').css('max-height', window.innerHeight + 'px');

    // // extra
    // $('.extra-videos').css('height', window.innerHeight + 'px');
    // $('.extra-videos video').css('max-height', window.innerHeight + 'px');
    // //=====


    $('.question-1, .question-2, .question-3 ').css('max-height', window.innerHeight + 'px');
}

$(window).resize(function(){
    defaultResize();
    changeQ3SpotsPosition();
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
        console.log($(".wrapper #vid-1 video")[0].currentTime);
        if($(".wrapper #vid-1 video")[0].currentTime>=3 && $(".wrapper #vid-1 video")[0].currentTime<=4){
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
            playVideoWithTimeCount(myNumber+1, 7, null);
            break;
        case 2:
            $(".question-2").css('display', 'none');
            playVideoWithTimeCount(myNumber+1, 12, null);
            break;
        case 3:
            $(".question-3").css('display', 'none');
            playVideoWithTimeCount(myNumber+1, 20, 1);
            break;
        case 4:
            playVideoWithTimeCount(myNumber+1, 25, 2);
            break;
        case 5:
            playVideoWithTimeCount(myNumber+1, 30, 3);
            break;
        case 6:
            playVideoWithTimeCount(myNumber+1, 35, null);
            break;
        case 7:
            $(".question-7").css('display', 'none');
            playVideoWithTimeCount(myNumber+1, 40, null);
            break;
        case 8:
            $(".question-8").css('display', 'none');
            playVideoWithTimeCount(myNumber+1, 45, null);
            break;
        default:
            $(".question-"+myNumber).css('display', 'none');
            $(".wrapper #vid-1 video")[0].play();
    }
}


function playVideoWithTimeCount(qNumber, time, videoNumber) {
    console.log("qNumber", qNumber);
    console.log("time", time);
    $(".wrapper #vid-1 video")[0].play();
    let myInterval = setInterval(myTimer, 1000);

    function myTimer() {
        console.log($(".wrapper #vid-1 video")[0].currentTime);
        if($(".wrapper #vid-1 video")[0].currentTime>=time && $(".wrapper #vid-1 video")[0].currentTime<=time+2){
            $(".wrapper #vid-1 video")[0].pause();
            if(videoNumber === null){
                $(".question-"+qNumber).css('display', 'flex');
            } else {
                $(".play-extra-video").data('video-number', videoNumber);
                $(".play-extra-video").css('display', 'block');
            }



            myStopFunction();
        }
    }

    function myStopFunction() {
        clearInterval(myInterval);
    }

}


// ===================== Play Extra Video =====================
$(".play-extra-video").click(function () {
    let videoNum = $(".play-extra-video").data('video-number');
    switch(videoNum) {
        case 1:
            $(".wrapper #extra-videos video").attr('src', './assets/video/movie_a.mp4');
            break;
        case 2:
            $(".wrapper #extra-videos video").attr('src', './assets/video/movie_b.mp4');
            break;
        case 3:
            $(".wrapper #extra-videos video").attr('src', './assets/video/movie_c.mp4');
            break;
        default:
            $(".wrapper #extra-videos").css('display', 'flex');
            $(".wrapper #extra-videos video")[0].play();
    }

    $(".wrapper #vid-1").css('display', 'none');
    $(".wrapper #extra-videos").css('display', 'flex');
    $(".wrapper #extra-videos video")[0].play();

});


function videoEnded() {
    let videoNum = $(".play-extra-video").data('video-number');
    $(".wrapper #extra-videos").css('display', 'none');
    $(".play-extra-video").css('display', 'none');
    $(".wrapper #vid-1").css('display', 'flex');
    continueVideoPlay(videoNum+3);
}


// ============================================================
// ===
var isAnswered = false;


$(".close-q").click(function () {
    let qNumber = $(this).data('question');
    if(isAnswered === true){
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
       $(this).css('background-color', '#aae322');
       $(this).append('<img src="assets/images/right.png"/>');
   } else {
       $(".question-1 > div > div > .answers > div").each(function () {
           if($(this).data('answer') == true){
               $(this).css('background-color', '#aae322');
               $(this).append('<img src="assets/images/right.png"/>');
           } else {
               $(this).css('background-color', '#f46b6b');
               $(this).append('<img src="assets/images/wrong.png"/>');
           }
       })
   }
});

// Q - 2
$(".question-2 > div > div > .answers > div").click(function () {
    isAnswered = true;
    if($(this).data('answer') == true){
        $(this).css('background-color', '#aae322');
        $(this).append('<img src="assets/images/right.png"/>');
    } else {
        $(".question-2 > div > div > .answers > div").each(function () {
            if($(this).data('answer') == true){
                $(this).css('background-color', '#aae322');
                $(this).append('<img src="assets/images/right.png"/>');
            } else {
                $(this).css('background-color', '#f46b6b');
                $(this).append('<img src="assets/images/wrong.png"/>');
            }
        })
    }
});




// Q - 3
let q3spotsPosition = [];
function changeQ3SpotsPosition(){
    if(q3spotsPosition.length !== 0){
        for(let i = 0; i < q3spotsPosition.length; i++){
            q3spotsPosition[i][0].draggable.position({
                my: "center",
                at: "center",
                of: q3spotsPosition[i][1],
                using: function(pos) {
                    $(this).css(pos);
                }
            });
        }
    }
}

$( ".draggable" ).draggable({
    containment: ".question-3 > div",
    // revert: true
});

$( ".droppable" ).droppable({
    drop: function( event, ui ) {
        q3spotsPosition.push([ui, $(this)]);
        let dragData = $(ui.helper[0]).data('name');
        let dropData = $(this).data('name');
        ui.draggable.position({
            my: "center",
            at: "center",
            of: $(this),
            using: function(pos) {
                $(this).animate(pos, "slow", "linear");
            }
        });
        if(dragData === dropData){
            $(ui.helper[0]).data('answer', 'true');
        } else {
            $(ui.helper[0]).data('answer', 'false');
        }

        $(ui.helper[0]).data('spot', 'true');

        // show check button if all spots used
        let isSpotsUsed = true;
        $(".question-3 > div > div > .answers > span").each(function () {
           if($(this).data('spot') === false){
               isSpotsUsed = false;
           }
        });
        if(isSpotsUsed === true){
            $(".question-3 > div > div > .answers > .check-answer").css('display', 'flex');
        }
    }
});

$(".question-3 > div > div > .answers > .check-answer").click(function () {
    let isAllCorrect = true;
    $(".question-3 > div > div > .answers > span").each(function () {
        if($(this).data('answer') === 'true'){
            $(this).css('border', '3px solid green');
        } else {
            $(this).css('border', '3px solid red');
            isAllCorrect = false;
        }
    });

    isAnswered = true;

    if(isAllCorrect === true){
        $(".question-3 > div > div > .answers > .check-answer").css('display', 'none');
    } else {
        $(".question-3 > div > div > .answers > .correct-answer").css('display', 'flex');
    }
});

$(".question-3 > div > div > .answers > .correct-answer").click(function () {
    $(".question-3 > div > div > .answers").html('');
    $(".question-3 > div > div > .table-wrap > div > span > span").css('display', 'block');
});



// Q - 7
$(".question-2 > div > div > .answers > div").click(function () {
    isAnswered = true;
    if($(this).data('answer') == true){
        $(this).css('background-color', '#aae322');
        $(this).append('<img src="assets/images/right.png"/>');
    } else {
        $(".question-2 > div > div > .answers > div").each(function () {
            if($(this).data('answer') == true){
                $(this).css('background-color', '#aae322');
                $(this).append('<img src="assets/images/right.png"/>');
            } else {
                $(this).css('background-color', '#f46b6b');
                $(this).append('<img src="assets/images/wrong.png"/>');
            }
        })
    }
});




















