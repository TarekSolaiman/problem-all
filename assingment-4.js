// problem--------1

function radianToDegree(radias) {
    if (typeof radias === "number") {
        let digre = radias * (180 / 3.14159)
        digre = digre.toFixed(2) /* After desimal tow posititon*/
        digre = parseFloat(digre) /* string to desimal*/
        return digre
    }
    else {
        return "enter The Number";
    }
}

// problem---------------2

function isJavaScriptFile(filename) {
    const file = typeof filename;
    if (file === "string") { /* ther is some condition*/
        if (filename.endsWith('.js') === true) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "its not string";
    }

}

// problem----------------3

function oilPrice(D, P, O) {
    const diesel = 114;
    const petrol = 130;
    const octane = 135;
    if (typeof D === "number" && typeof P === "number" && typeof O === "number") {
        const dieselPrice = diesel * D; /*Diesel totale price */
        const petrolPrice = petrol * P; /*Petrol totale price */
        const octanePrice = octane * O; /*Octane totale price */
        const totlePrice = dieselPrice + petrolPrice + octanePrice; /*All product totle price*/

        return totlePrice;
    }
    else {
        return "error";
    }

}

// problem----------------4

function publicBusFare(howMuch) {

    const bus = 50;
    const microBus = 11;
    const publicBus = 250;
    if (howMuch >= bus && typeof howMuch === "number") {
        let people = howMuch % bus;

        if (people >= microBus) {
            people = people % microBus;
            let publicTiketPrice = people * publicBus;
            return publicTiketPrice;
        }
        else {
            publicTiketPrice = people * publicBus;
            return publicTiketPrice;
        }
    }
    else if (howMuch >= microBus && typeof howMuch === "number") {
        people = howMuch % microBus;
        publicTiketPrice = people * publicBus;
        return publicTiketPrice;
    }
    else if (typeof howMuch === "number") {
        publicTiketPrice = howMuch * publicBus
    }
    else {
        return "pleas input a Number";
    }
}

// problem----------------5

function isBestFriend(obj1, obj2) {
    if (obj1.name === obj2.friend && obj2.name === obj1.friend && typeof obj1 === "object" && typeof obj2 === "object") {
        return true;
    }
    else if (typeof obj1 === "object" && typeof obj1 === "object" && typeof obj2 === "object") {
        return false;
    }
    else {
        return "Write a object";
    }
}