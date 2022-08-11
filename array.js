const friend = [23, 34, 56, 67, 78, 89, 54, 67, 54, 76];
const part1 = friend.splice(3, 4, 555, 444, 666);
console.log(part1);
console.log(friend);

// video problem 3 module 22------------------
const names = ['abul', 'babul', 'kabul', 'abul', 'babul', 'kabul', 'cabul', 'cabul', 'abul', 'babul', 'kabul', 'cabul']

function removeDupliname(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique
}
const outname = removeDupliname(names);
console.log(outname);

// video problem 4 module 22------------------

function fooBar() {
    array = [];
    for (let i = 1; i <= 50; i++) {
        const index = i;
        const element = index;
        if (element % 3 === 0 && element % 5 === 0) {
            array.push('foobar');
        }
        else if (element % 3 === 0) {
            array.push('foo');
        }
        else if (element % 5 === 0) {
            array.push('bar');
        }
        else {
            continue
        }
    }
    return array
}

const show = fooBar();
console.log(show);


function Foobar() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('foobar');
        }
        else if (i % 3 === 0) {
            console.log('foo');
        }
        else if (i % 5 === 0) {
            console.log('bar');
        }
        else {
            console.log(i);
        }
    }
}
const toto = Foobar();
console.log(toto);


// video problem 5 module 22------------------

function totleKat(khatpalong, table, chiyar) {
    const pareKhat = 11;
    const paretable = 5;
    const parechiyar = 9;
    const totleKhat = khatpalong * pareKhat;
    const totleTable = table * paretable;
    const totlechiyar = chiyar * parechiyar;
    const totle = totleKhat + totleTable + totlechiyar;
    return totle
}

const inkhat = 2;
const intable = 3;
const inchiyar = 5;
const totle = totleKat(inkhat, intable, inchiyar);
console.log('Totle kat lagbe-', totle);

// video problem 6 module 22------------------
/*-------------
function in Array of object
               --------------*/

const phones = [
    { name: 'one+7', price: 30000, camera: 12, colore: 'silver' },
    { name: 'simphony', price: 20000, camera: 10, colore: 'golden' },
    { name: 'welton', price: 15000, camera: 11, colore: 'black' },
    { name: 'nokea', price: 25000, camera: 25, colore: 'blue' },
    { name: 'oppo', price: 22000, camera: 11, colore: 'whait' },
]

function cheapestPhone(phones) {
    let cheapest = phones[0]
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

console.log(cheapestPhone(phones));

// problem-----------------7

// object price sum

const shoping = [
    { name: 'shoes', price: 1200, quantity: 2 },
    { name: 'shairt', price: 1300, quantity: 3 },
    { name: 'pent', price: 1200, quantity: 4 },
    { name: 'beld', price: 300, quantity: 2 },
]

function shopingCart(item) {
    let sum = 0;
    for (let i = 0; i < item.length; i++) {
        const element = item[i];
        const quantityprice = element.price * element.quantity;
        sum = sum + quantityprice;
    }
    return sum
}

const totleprice = shopingCart(shoping)
console.log(totleprice);


// problem------------------8
// #jodi ticket 100 ta hoy tahole ticket price 90 tk .
// #jodi 100 er besi hoy tahole first 100 er price 90 tk er porer golar price 80 tk .
// #jodi 200 er besi hoy tahole first 100 er price 90 tk er porer 100 er price 80 tk er prer gola 70


function ticketPrice(quantity) {
    const firstTicket = 90;
    const secoundTicket = 80;
    const thardTicket = 70;

    if (quantity <= 100) {
        const totleTicketPrice = quantity * firstTicket;
        return totleTicketPrice
    }
    else if (quantity <= 200) {
        const first100 = 100 * firstTicket;
        const secoundqu = quantity - 100;
        const secound100 = secoundqu * secoundTicket;
        const totleTicketPrice2 = secound100 + first100;
        return totleTicketPrice2;
    }
    else {
        const first100 = 100 * firstTicket;
        const secound100 = 100 * secoundTicket;
        const lestQuantity = quantity - 200;
        const lestTicket = lestQuantity * thardTicket;
        const totleTicketPrice3 = first100 + secound100 + lestTicket;
        return totleTicketPrice3
    }
}

const quantityOfNeed = 300;
const totlePriceIn = ticketPrice(quantityOfNeed);
console.log('Totle price', totlePriceIn);



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


console.log(radianToDegree(10));
console.log(radianToDegree(25));
console.log(radianToDegree('jggdfgydygf'));
console.log(radianToDegree(199));