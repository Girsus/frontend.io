$( document ).ready(function() {
    $('.communication_but, .contact_me>button').on('click', function(e) {
        $('body').addClass('dark_body');
        $(".container_form").fadeIn();
        $('body').addClass('stop-scrolling');
        $('body').bind('touchmove', function(e){e.preventDefault()});
    });
    $('.close_form').on('click', function(e) {
        $(".container_form").fadeOut();
        $('body').removeClass('dark_body');
        $('body').unbind('touchmove');
        $('body').removeClass('stop-scrolling');
    });
    $('.menu-btn').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('menu-btn_active');
        $('.menu-nav').toggleClass('menu-nav_active');
      });

    scrollSpy();
    var canonHeight = $('.about_me').height(),
    windowH = $( window ).height();

    if(canonHeight<windowH) $('.about_me').css('height',windowH);
    

    $( window ).resize(function() {
        if(canonHeight<windowH) $('.about_me').css('height',windowH);
        else{
            $('.about_me').css('height',canonHeight);
        }
    });

	$(".menu-nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 60;
		$('body,html').animate({scrollTop: top}, 1500);
    });

    $(".nav_menu ul li").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 60;
		$('body,html').animate({scrollTop: top}, 1500);
    });
    
});

$(window).scroll(function() {
	scrollSpy();
});

function scrollSpy(){
	$(".nav_menu>ul>li>a").removeClass("active_item");

	var divs = [];
	$(".nav_menu>ul>li>a").each(function(i) {
		var appo = $(this).attr("target");
        divs[i] = $("#" + appo).offset().top;
        
	});
	var pos = $(window).scrollTop();
	var off = ($(window).height()) / 2;

	pos = pos + off;

	var index = 0;

	for (index = 0; index < divs.length; index++) {
		if (pos < divs[index]) {
			break;
		}
	}
	index--;
	$(".nav_menu>ul>li:eq(" + index + ") a").addClass("active_item");
};
