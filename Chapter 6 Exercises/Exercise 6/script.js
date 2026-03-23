
function calculate(){ /*this will run when the function is called*/

    var price = document.getElementById("price").value; /*it gets the value that the user entered then stores it in the variable "price"*/

    var liters = document.getElementById("liters").value; /*it gets the value that the user entered then stores it in the variable "liters"*/
    
    var total = price * liters; /*it multiplies the price and liters to be able to calculate the cost*/
    
    document.getElementById("result").innerHTML = /*this will display the total cost inside the element "result"*/
    "Total Cost: $" + total.toFixed(2);

}