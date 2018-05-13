$(document).ready(function(){
    $('#awake').click(function(){
        var randR = Math.floor(Math.random() * 255);
        var randG = Math.floor(Math.random() * 255);
        var randB = Math.floor(Math.random() * 255);

        $('body').css('background-color','rgb(' + randR + ', ' + randG + ', ' + randB + ')');
    });
    $('#fonts').click(function(){
        var typeArray = ['Abril Fatface', 'Alice', 'Amiri', 'Cardo', 'Comfortaa', 'Cormorant Garamond', 'Crimson Text', 'Libre Baskerville', 'Neuton', 'News Cycle', 'Open Sans Condensed', 'Playfair Display', 'Questrial', 'Quicksand', 'Rozha One', 'Yeseva One'];
        var arrayRand = Math.floor(Math.random() * typeArray.length);

        $('.text').css('font-family', typeArray[arrayRand]);
    });

        $("#r1").draggable();
        $("#r2").draggable();
        $("#r3").draggable();
        $("#r4").draggable();
        $("#r5").draggable();
        $("#r6").draggable();
        $("#r7").draggable();
        $("#r8").draggable();
        $("#r9").draggable();
        $("#r10").draggable();
        $("#r11").draggable();
        $("#r12").draggable();
        $("#r13").draggable();
        $("#r14").draggable();
    });


 
