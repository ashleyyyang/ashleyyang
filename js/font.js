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


var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "art/doggos.png",
    "art/italy.jpg",
    "art/self-portrait.jpg"
)