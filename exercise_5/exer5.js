
function tellFortune(number_of_children,parter_name,geo_location,title){
    
    console.log("You will be a "+ title+" in "+ geo_location+", and married to "+parter_name+" with "+number_of_children+" kids");
}

tellFortune(2,"karthik","Tampa","Software Engineer");
tellFortune(3,"john","newyork","Software Engineer");
tellFortune(5,"mary","Tampa","Software Engineer");


function calculateDogAge( puppysAge,conversionrate ){
    var doggieAge=puppysAge*conversionrate ;
    console.log("Your doggie is "+doggieAge+" years old in dog years!")

}

    calculateDogAge(6,7);
    calculateDogAge(8,7);
    calculateDogAge(9,7);

    function calculateSupply(age,amount_per_day)
    {
        var max_age=80;
        
     var rest_of_age= max_age-age;
     var x=365*rest_of_age*amount_per_day;
        
     console.log("you will need "+x.toFixed()+"  to last you until the ripe old age of john" )

    }

    calculateSupply(30,2);
    calculateSupply(40,1);
    calculateSupply(50,3);

    calculateSupply(30,1.54535);

 var r= 20;

 function calCircumference() {
    var Circumference_of_the_circle=2*3.14*r;

    console.log("The circumference is "+Circumference_of_the_circle);
    
 }
    
  calCircumference() ;
   
  function area() {
    var Area_of_the_circle=3.14*20*20;
     console.log("The area is "+Area_of_the_circle);
    
  }

  area();

function celsiusToFahrenheit(celcius) {

    var fahrenheit= (celcius*9/5)+32;
    console.log(celcius+ " c is "+fahrenheit+" f " )
    
}
     celsiusToFahrenheit(30);

 function fahrenheitToCelcius(fahrenheit)   {
     
    var celcius= (fahrenheit-32)*5/9;
    console.log(fahrenheit + " f is "+celcius+ "c")
 } 
     fahrenheitToCelcius(48);


     


    

    



    
    