//3d title

jQuery(document).ready(function(){
    $('h1').mousemove(function(e){
      var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
      var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
      $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(255,152,146,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,205,146,1), '+rXP/70+'px '+rYP/12+'px rgba(146,183,255,.7)');
    });
 });


var cardheight = img.height;
var numcard

document.getElementById('img.height')

for (var i = 0; i <= COL_COUNT; i++) {
  cardheight = img.height;
}

$(document).ready(function(){
  $(document).load(function(){
    $("#fade").fadeIn();
  })
})

/*
var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "http://ashleyyang.ca/art/doggos.png",
    "http://ashleyyang.ca/art/italy.jpg",
    "http://ashleyyang.ca/art/self-portrait.jpg"
)



function preloader() {
	if (document.images) {
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();

		img1.src = "http://ashleyyang.ca/art/doggos.png";
		img2.src = "http://ashleyyang.ca/art/self-portrait.jpg";
		img3.src = "http://ashleyyang.ca/art/syde_logo1.png";
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader); */


$(function(){
  $.each(document.images, function(){
             var this_image = this;
             var src = $(this_image).attr('src') || '' ;
             if(!src.length > 0){
                 //this_image.src = options.loading; // show loading
                 var lsrc = $(this_image).attr('lsrc') || '' ;
                 if(lsrc.length > 0){
                     var img = new Image();
                     img.src = lsrc;
                     $(img).load(function() {
                         this_image.src = this.src;
                     });
                 }
             }
         });
});