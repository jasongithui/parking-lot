// Switch icon Animation
function changeCar (){
    let car = document.getElementById("carPark");
    carPark.innerHTML = "Truck";

    setTimeout(function(){
        carPark.innerHTML = "Car";
    }, 2000);
}
 // call Animation
changeCar ();
 
// Animate Every 6 seconds
setInterval(changeCar, 6000);

$(document).ready(function() {
    $(".clickable").click(function() {
      $(".first-showing").toggle();
      $(".first-hidden").toggle();
      $("#first").show();
    });
    $(".click").click(function() {
      $(".another-showing").toggle();
      $(".another-hidden").toggle();
      $("#another").show();
    });
    $(".clic").click(function() {
      $(".second-showing").toggle();
      $(".second-hidden").toggle();
      $("#second").show();
    });
    $(".clicks").click(function() {
        $(".last-showing").toggle();
        $(".last-hidden").toggle();
        $("#last").show();
      });
});