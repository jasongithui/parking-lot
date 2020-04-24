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

//Order section//
var price , city_price, vehicle_price ;
let total = 0;
function GetVehicle( city,vehicle,duration,security, total ){
  this.city = city;
  this.vehicle = vehicle;
  this.duration = duration;
  this.security = security;
  this.total = total;
}
// proceed button
$(document).ready(function(){
    // $("button.proceed").click(function(){
    //   $("button.proceed").hide();
    //   $("#information").hide();
    //   $("div.choise").slideDown(1000);
    // });
    $("button.proceed").click(function(event){
     let pcity = $(".city option:selected").val();
     let pvehicle = $("#vehicle option:selected").val();
     let pduration = $("#duration option:selected").val();
     let psecurity = [];
     $.each($("input[name='security']:checked"), function(){            
         psecurity.push($(this).val());
     });
     console.log(psecurity.join(", "));
  
     switch(pvehicle){
      case "0":
        price =0;
      break;
      case "Truck":
         price = 200;
         console.log(price);
       break;
       case "Suv":
         price = 100;
         console.log("The price is "+price);
       break;
       case "Saloon":
         price = 50;
         console.log(price);
       default:
         console.log("error"); 
     }
     switch(pduration){
        case "0":
          duration_price = 0;
        break;
        case "30min":
          duration_price = 70;
        break;
        case "60min":
          duration_price = 140;
        break;
        case "90min":
          duration_price = 180;
        break;
        default:
          console.log("No price"); 
      }
      let security_value = psecurity.length*100;
      console.log("security value" + security_value);
  
      if((pcity == "0") && (pvehicle == "0")){
        console.log("nothing selected");
        $("button.proceed").show();
        $("#information").show();
        $("div.choise").hide();
        alert("Please select a Valid city Name and Vehicle"); 
      }
      else{
        $("button.proceed").hide();
        $("#information").hide();
        $("div.choise").slideDown(1000);
      }
      total = price + duration_price + security_value;
      console.log(total);
      let checkoutTotal =0;
      checkoutTotal = checkoutTotal + total;
  
      $("#city").html($(".city option:selected").val());
      $("#vehicle").html( $("#vehicle option:selected").val());
      $("#duration").html($("#duration option:selected").val());
      $("#security").html(psecurity.join(", "));
      $("#totals").html(total);
      
  //
      $("button.addCity").click(function(){
        let pcity = $(".city option:selected").val();
        let pvehicle = $("#vehicle option:selected").val();
        let pduration = $("#c option:selected").val();
        let psecurity = [];
        $.each($("input[name='toppings']:checked"), function(){            
            psecurity.push($(this).val());
        });
        console.log(ptopping.join(", "));
        switch(pvehicle){
          case "0":
            price =0;
          break;
          case "Truck":
             price = 200;
             console.log(price);
           break;
           case "Suv":
             price = 100;
             console.log("The price is "+price);
           break;
           case "Saloon":
             price = 50;
             console.log(price);
           default:
             console.log("error"); 
         }
         switch(pduration){
            case "0":
              duration_price = 0;
            break;
            case "30min":
              duration_price = 70;
            break;
            case "60min":
              duration_price = 140;
            break;
            case "90min":
              duration_price = 180;
            break;
            default:
              console.log("No price"); 
          }
          let security_value = psecurity.length*100;
          console.log("security value" + security_value);
          total = price + duration_price + security_value;
          console.log(total);
  
          checkoutTotal = checkoutTotal + total;
          console.log(checkoutTotal);
        // constractor function
        var newOrder = new GetVehicle(pcity, pvehicle, pduration,psecurity,total);
  
        $("#ordersmade").append('<tr><td id="city">'+newOrder.name +'</td><td id="vehicle">' + newOrder.size + '</td><td id="duration">'+newOrder.crust + '</td><td id="security">'+newOrder.security+'</td><td id="totals">'+newOrder.total+'</td></tr>');
        console.log(newOrder);
    });
    // Checkout button
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total parking fee is sh. "+checkoutTotal);
      $("#booktotal").append("Your fee is sh. "+checkoutTotal);
    });

    // home delivery button
    $("button.deliver").click(function(){
      $(".booktable").hide();
      $(".choise h2").hide();
      $(".delivery").slideDown(2000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#booktotal").hide();
      let deliceryamount= checkoutTotal+100;
      console.log("You will pay sh. "+deliceryamount+" for tax");
      $("#totalbill").append("Your parking fee plus tax fee is: "+deliceryamount);
    });

    // when one clicks place order button
    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#booktotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliceryamount= checkoutTotal+100;
      console.log("Final Bill is: "+deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finallmessage").append(person+", We have recieved your book order done at "+location+ ". Prepare sh. "+deliceryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for book completion!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});