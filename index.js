// Code your solution in this file!

/* function 1 
distanceFromHqInBlocks: 
Returns the number of blocks from Scuber's headquarters to the pickup location. */
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - 42)
    }
    


//function 2
// distanceFromHqInFeet
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    }

//function 3
function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(destination - start) * 264
}

//function 4
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0
    }
    if (distance>=400 && distance<=2000){
        return (distance-400)* 0.02
    }
    else if(distance >= 2000 && distance<=2500){
        return 25
    }
    else if (distance > 2500){
        return "cannot travel that far"
    }
  }

