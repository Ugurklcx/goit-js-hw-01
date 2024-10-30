console.log("---------- TASK-1 ----------")

function makeTransaction(quantity, PricePerDroid) {
    let totalPrice = quantity * PricePerDroid;
    console.log("You Ordered " + quantity + " droids worth " + totalPrice + " credits! ")
}

makeTransaction(5, 3000)
makeTransaction(3, 1000)
makeTransaction(10, 500)
