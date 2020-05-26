$(document).ready(function() {
    $("form").submit(function(e){
        e.preventDefault();
        var toppingsInput=$("#toppingsId option:selected").text();
        var sizeInput=$("#sizeId option:selected").text();
        var crustInput=$("#crustId option:selected").text();
        var firstNameInput=$("input#firstName").val();
        var lastNameInput=$("input#lastName").val();
        var addressInput=$("input#address").val();
        var sizeCost=function(){
            if(sizeInput==="Small"){
                return 500;
            }else if(sizeInput==="Medium"){
                return 800;
            }else if(sizeInput==="Large"){
                return 1000;
            }else{
                alert ("enter valid size");
            };
        };
        var toppingCost=function(){
            if(toppingsInput==="Tomatoe"){
                return 200;
            }else if(toppingsInput==="Sausage"){
                return 250;
            }else if (toppingsInput==="Chicken"){
            return 500;
            }else{
                alert("choose valid topping");
            };
        };
        var crustCost=function(){
            if(crustInput==="Crispy"){
                return 200;
            }else if(crustInput==="Stuffed"){
                return 150;
            }else if(crustInput==="Gluten-free"){
                return 200;
            }else{
                alert("choose valid crust");
            };
        };
        var delivery=function(){
            if(firstNameInput && lastNameInput && addressInput != ""){
                return 250;
            }else{
                return 0;
            }
        }
        var totalCost=sizeCost(sizeInput)+toppingCost(toppingsInput)+crustCost(crustInput)+delivery();
        alert("your total cost is " + totalCost);
    });
});