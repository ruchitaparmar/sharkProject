$(".lg-hotspot-label").show("fast");
$(".lg-hotspot-label").hide();

$(".lg-hotspot-button").click(function(){
  var thisLabel = $(this).siblings(".lg-hotspot-label");
  var thisLabelState = thisLabel.css("display");
  $(".lg-hotspot-label").fadeOut(0).parent().css("z-index", "0");
  if(thisLabelState=="none") {
    thisLabel.fadeIn(0);
    $(this).parent().css("z-index", "999");
  }
});