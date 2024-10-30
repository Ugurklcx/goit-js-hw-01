console.log("---------- TASK-2 ----------")


function getShippingMessage(country, Price, DeliveryFee){
    let totalPrice = Price + DeliveryFee
    console.log("Shipping to "+ country +" will cost " + totalPrice + " credits! ")
}
getShippingMessage("Australia", 120, 50)
getShippingMessage("Germany", 80, 20)
getShippingMessage("Sweden", 100, 20)