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




$.fn.addImage = function(src, fnBefore, fnAfter){ 
  return this.each(function(){
       var i = new Image();
       i.src = src;
       /*    if you want to make sure the loader displays correctly ,
           you could set CSS width/height here OR you could set a style
           as I have done.
       */
       //$(this).css({"width":i.width, "height":i.height});
       $(i).fadeTo(0,0);
       fnBefore(i)
       $(i).bind("load", i, fnAfter); 
       this.appendChild(i);
  }); 
}     


function beforeLoad(el) {
   console.log("Before image load")
   $(el).fadeOut();
}


function afterLoad(e) {
   console.log("After image load")
   $(e.target).fadeTo(500,1)
       //.parent().removeAttr("style");//can remove parent css here if you like
}

$(document).ready(function(){
   
   $("#image1").addImage(
       "http://ashleyyang.ca/art/doggos.png", 
       beforeLoad,
       afterLoad
   );


   $("#image2").addImage(    
       "http://ashleyyang.ca/art/syde_logo1.png", 
       beforeLoad,
       afterLoad
   );


});

