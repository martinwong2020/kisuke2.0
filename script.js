$(".kisukeBankai").hide();
$(window).on('load',function(){
    console.log("why are you looking at my console terminal");
});
// $(document).ready(function(){
//     rendermusic();
// });
// function rendermusic(){
//     $("#sounds").attr("src","audio/BLEACH Animation_ Kisuke Urahara Bankai.mp3");
//     console.log("here");
// }
var timer=0;
var time=setInterval(counter,1000);
function counter(){
    if(timer==3){
        clearInterval(time);
        $(".kisukeBankai").show();
        // var audio=document.getElementById("sounds");
        // audio.load();
        console.log("time");
    }else{
        timer=timer+1;
    }
}
// var supportedFlag = $.keyframe.isSupported();
// $.keyframe.define([{
//     name:'fadeIn',
//     '0%': {
//         'filter':'grayscale(100%)'
//     },
//     '100%': {
//         'filter':'grayscale(0%)'
//     }
// }]);

$(".kisukeBankai").click(function(){
    // $(".kisukeBankai").animate({filter:grayscale(0%)});
    // $(".kisukeBankai").css("filter","grayscale(0%)");
    // $(".kisukeBankai").playKeyFrame({
    //     name: 'fadeIn',
    //     duration:2000
    // });
    $(".kisukeBankai").css("animation",'fadeIn ease-in 5s forwards');
    //$(".kisukeBankai").css("animation-play-state","running");
    document.querySelector("audio").volume = 0.3;
    $('audio#sounds')[0].play();
    var slashTimer=0;
//function slashTimerCall(){
    var slashTime=setInterval(slashCounter,300);
    function slashCounter(){
        if(slashTimer==8){
            $(".slashParent").css("visibility",'visible');
            $(".slash").css("width",'100%');
            $(".slash").css("animation",'slash .5s');
            //clearInterval(slashTime);
            slashTimer=slashTimer+.5;
            console.log("clled");
        }
        else if(slashTimer==9){
            $(".slash").css("height",'100%');
            // $(".slash").css("background-color","white");
            $(".slash").css("background-image","url('images/fanpage.PNG')");
            //$(".slash").css("box-shadow", "100px 100px 40px 20px rgb(255, 238, 140)");
            $(".slash").css("border","none");
            $(".slash").css("animation",'flash 1s');
            slashTimer=slashTimer+.5;
            // clearInterval(slashTime);
        }
        else if(slashTimer==10){
            window.location.href="fanpage.html";
            clearInterval(slashTime);
        }
        else{
            slashTimer=slashTimer+.5;
            console.log(slashTimer);
        }
    }
});

//}

