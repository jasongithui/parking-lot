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