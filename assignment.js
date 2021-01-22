// https://github.com/Soyebbabu/javascript-assignment
           
            //kilometer To Meter Convert
function kilometerToMeter(kilometer) {
    var meter = kilometer* 1000;    // 01 kilometer = 1000 meter.
    if (kilometer >= 1) {
    return meter;
    } 
        else {
            return "Please Try again later"
            }
    }          
var result = kilometerToMeter(10);
console.log(result);
            
                //Budget Calculater
            
function budgetCalculator(watch, phone, laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
var totalcost = budgetCalculator(1,1,1); //indivisual watch,phone and laptop total price
console.log(totalcost);
            
            //Hotel Cost
function hotelCost(totalDays){
    var cost = 0;
    if(totalDays <=10){
    cost = totalDays * 100;
    }
    else if(totalDays <=20){
    var firstPart = 10 * 100;
    var remaining = totalDays - 10;
    var secondPart = remaining * 80;
    cost = firstPart + secondPart;
    }
        else{
            var firstPart = 10*100;
            var secondPart = 10 *80;
            var remaining = totalDays - 20;
            var thirdPart = remaining *50;
            cost = firstPart + secondPart + thirdPart;
        }
            return cost
    }
                       
var totalCost = hotelCost(50); //50days total hotel cost
console.log(totalCost);
            
            //Mega Friend
            
function megaFriend(n) {
    var large = 0;
    var largest;
    for (var i = 0; i < n.length; i++) {
        if (n[i].length > large) {
        var large = n[i].length;
        largest = n[i];
        }
    }
        return largest;
}
                         
var friendName = ['Soyeb', 'Soyebmahmud', 'babu'];
var result = megaFriend(friendName); //find largest name from array
console.log(result);
                        
                        