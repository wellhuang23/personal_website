$("#userPicture").hide();
$("#upperText").hide();
$("#leftText").hide();
$("#rightText").hide();
$("#downerText").hide();
$(".startVideoDiv").click(function(){
  $("#startVideo").fadeOut(1000);
  $("#userPicture").fadeIn(3000);
  $("#upperText").fadeIn(4000);
  $("#leftText").fadeIn(5000);
  $("#rightText").fadeIn(6000);
  $("#downerText").fadeIn(7000);
  $(".userPictureDiv").css({"z-index":2});
});

// carousel in carousel
var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}
var angle1 = 0;
function galleryspin1(sign1) { 
spinner1 = document.querySelector("#spinner1");
if (!sign1) { angle1 = angle1 + 45; } else { angle1 = angle1 - 45; }
spinner1.setAttribute("style","-webkit-transform: rotateY("+ angle1 +"deg); -moz-transform: rotateY("+ angle1 +"deg); transform: rotateY("+ angle1 +"deg);");
}
var angle2 = 0;
function galleryspin2(sign2) { 
spinner1 = document.querySelector("#spinner1");
if (!sign2) { angle2 = angle2 + 45; } else { angle2 = angle2 - 45; }
spinner2.setAttribute("style","-webkit-transform: rotateY("+ angle2 +"deg); -moz-transform: rotateY("+ angle2 +"deg); transform: rotateY("+ angle2 +"deg);");
}

// bar
var $animation_elements = $(".animation-element");
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("in-view");
    } else {
      $element.removeClass("in-view");
    }
  });
}
$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");
