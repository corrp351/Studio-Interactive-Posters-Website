$(document).ready(function(){
  var par = $('.parallax');
    $(window).on('scroll', function() {
    var st = $(this).scrollTop();
      par.css({
      'opacity' : 1 - st/2200
  });
});





  // $(window).scroll(function(){
  //   $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  // });

  // var beep = document.getElementById("beep");
  // var boing = document.getElementById("boing");
  // var fart = document.getElementById("fart");
  // var laugh1 = document.getElementById("laugh1");
  // var laugh2 = document.getElementById("laugh2");
  // var yaba = document.getElementById("yaba");
  // var yay = document.getElementById("yay");
  // var ahh = document.getElementById("ahh");
  // var birdie = document.getElementById("birdie");
  // var bwow = document.getElementById("bwow");
  // var notfunny = document.getElementById("notfunny");
  // var peeves = document.getElementById("peeves");
  // var rattle = document.getElementById("rattle");

  // $('#s33').hover(function() {
  // 	if (beep.paused == false) {
  //     beep.pause();
  // } else {
  //     beep.play();
  // }
  // });

  // $('#s29').hover(function() {
  // 	if (boing.paused == false) {
  //     boing.pause();
  // } else {
  //     boing.play();
  // }
  // });

  // $('#s27').hover(function() {
  // 	if (fart.paused == false) {
  //     fart.pause();
  // } else {
  //     fart.play();
  // }
  // });

  // $('#s26').hover(function() {
  // 	if (laugh1.paused == false) {
  //     laugh1.pause();
  // } else {
  //     laugh1.play();
  // }
  // });

  // $('#s19').hover(function() {
  // 	if (laugh2.paused == false) {
  //     laugh2.pause();
  // } else {
  //     laugh2.play();
  // }
  // });

  // $('#s32').hover(function() {
  // 	if (yaba.paused == false) {
  //     yaba.pause();
  // } else {
  //     yaba.play();
  // }
  // });

  // $('#s31').hover(function() {
  // 	if (yay.paused == false) {
  //     yay.pause();
  // } else {
  //     yay.play();
  // }
  // });

  // $('#s30').hover(function() {
  // 	if (ahh.paused == false) {
  //     ahh.pause();
  // } else {
  //     ahh.play();
  // }
  // });

  // $('#s25').hover(function() {
  // 	if (birdie.paused == false) {
  //     birdie.pause();
  // } else {
  //     birdie.play();
  // }
  // });

  // $('#s34').hover(function() {
  // 	if (bwow.paused == false) {
  //     bwow.pause();
  // } else {
  //     bwow.play();
  // }
  // });

  // $('#s28').hover(function() {
  // 	if (notfunny.paused == false) {
  //     notfunny.pause();
  // } else {
  //     notfunny.play();
  // }
  // });

  // $('#s23').hover(function() {
  // 	if (peeves.paused == false) {
  //     peeves.pause();
  // } else {
  //     peeves.play();
  // }
  // });

  // $('#s15').hover(function() {
  // 	if (rattle.paused == false) {
  //     rattle.pause();
  // } else {
  //     rattle.play();
  // }
  // });
});



// $('.player_audio').click(function() {
//   if (this.paused == false) {
//       this.pause();
//       alert('music paused');
//   } else {
//       this.play();
//       alert('music playing');
//   }
// });

// function PlaySound(soundobj) {
//     var thissound=document.getElementById(soundobj);
//     thissound.play();
// }

// function StopSound(soundobj) {
//     var thissound=document.getElementById(soundobj);
//     thissound.pause();
//     thissound.currentTime = 0;
// }