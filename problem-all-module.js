// Module - 16 give you 4 problem . Now solve it-----------------

// Problem -------------1


function calculateShopingMuny(totalMuny, item1, item2) {
    const backMuny = (totalMuny - (item1 + item2));
    return backMuny;
}

var momGivesMuny = 2000;
var applesPrice = 400;
var orengsPrice = 300;
const backMunyformom = calculateShopingMuny(momGivesMuny, applesPrice, orengsPrice)
console.log(backMunyformom);


// problem -------------2


function averageMarks(markArray) {
    let average = 0;
    for (let i = 0; i < markArray.length; i++) {
        const element = markArray[i];
        average = average + element;

    }
    average = average / markArray.length;
    average = average.toFixed(2);
    average = parseFloat(average);
    return average;
}
const allMark = [72.34, 89.45, 67.70, 77.65, 75, 84];
const outarray = averageMarks(allMark);
console.log(outarray);


// Problem--------------3

let techVar1 = 'I am going to be';
let techVar2 = 'an awesome web developer';
const comboWord = techVar1 + ' ' + techVar2;
console.log(comboWord);


// Problem----------------4

function remainder(a, b) {
    const outRemaind = a % b;
    return outRemaind;
}

const num1 = 123;
const num2 = 5;
const oparetion = remainder(num1, num2);
console.log(oparetion);


// Module - 17 give you 4 problem . Now solve it-----------------

// problem-----------------1

let froots = ['Apple', 'Banana', 'Oreng'];
froots1 = froots.indexOf('Banana');
console.log(froots1);
froots[1] = 'Mango';
console.log(froots);
froots.pop();
console.log(froots);
froots.push('Watermelon');
console.log(froots);

// Problem---------------2

function Grading(score) {
    if (score >= 80) {
        return 'A'
    }
    else if (score >= 60) {
        return 'B'
    }
    else if (score >= 50) {
        return 'C'
    }
    else if (score >= 40) {
        return 'D'
    }
    else if (score >= 33) {
        return 'E'
    }
    else {
        return 'F'
    }
}

const inYoruScore = 55;
const result = Grading(inYoruScore);
console.log(result);

// Problem-------------3

function findLargestNumber(a, b, c) {
    if (a > b && a > c) {
        return a
    }
    else if (b > a && b > c) {
        return b
    }
    else {
        return c
    }
}

const Num1 = 34;
const Num2 = 74;
const Num3 = 50;
const lurgNum = findLargestNumber(Num1, Num2, Num3);
console.log(lurgNum);

// Problem------------5 not the list 

function traficSignel(signelColour) {
    switch (signelColour) {
        case 'Green':
            return 'Now you corse the road'
            break;

        case 'Yellow':
            return 'Wate to Green light'
            break;

        default:
            return 'Not now'
            break;
    }
}

const light = 'Yellow';
const Notification = traficSignel(light);
console.log(Notification);


// Module - 18 give you 4 problem . Now solve it-----------------

// Problem--------------1

function retipThemsg(msg) {

    for (let i = 0; i <= 10; i++) {
        let i = msg;
        const element = i;
        console.log(element);
    }
    return 'Now msg is sended 10 time'
}

console.log(retipThemsg('Tumi parbe'));


// Problem--------------2


function retipThemsgWhile(msg2) {
    let i = 0;
    while (i <= 10) {
        const element = i + msg2;
        console.log(element);
        i++;
    }
    return 'Now msg is sended 10 time'
}

console.log(retipThemsgWhile('Tumi 100 bar parbe'));


// Preblem--------------3


function retipThemsgWhileREV(msg2) {
    let i = 10;
    while (i >= 1) {
        const element = i + msg2;
        console.log(element);
        i--;
    }
    return 'Now msg is sended 10 time'
}

console.log(retipThemsgWhileREV('Tumi 200 bar parbe'));


// Problem--------------4

function retipThemsgREV(msg) {

    for (let i = 10; i >= 1; i--) {
        let i = msg;
        const element = i;
        console.log(element);
    }
    return 'Now msg is sended 10 time'
}

console.log(retipThemsgREV('Tumi 100000 bar parbe'));


// Module - 19 give you 4 problem . Now solve it-----------------

//Problem-------------1

function mathTable(inInteger) {
    for (let i = 1; i <= 10; i++) {
        const result = i * inInteger;
        console.log(i, '*', inInteger, '=', result);
    }
    return 'mathTble'
}

const inputInteger = 3;
const outputInteger = mathTable(inputInteger);
console.log(outputInteger);

//Problem-------------2

function LowercaseName(yourName) {
    const outName = yourName.toLowerCase();
    return outName
}
const inYourName = 'MD TAREK SOLAIMAN';
const outYourName = LowercaseName(inYourName);
console.log(outYourName);

//Problem-------------3

function fulnameOparetion(name1, name2) {
    const fulname = firstName + ' ' + lastName;
    return fulname
}

const firstName = 'Tarek';
const lastName = 'Solaiman';
const outFulname = fulnameOparetion(firstName, lastName);
console.log(outFulname);

//Problem-------------4

function Square(Num) {
    const squernum = Math.pow(Num, 2);
    return squernum
}

const inputNum = 4;
const outputNum = Square(inputNum);

console.log(outputNum);


// problem 5 not the list Odd even number------------ 

function OddEvenNumber(inIntegers) {
    if (inIntegers % 2 == 0) {
        return 'Even Number'
    }
    else {
        return 'Odd Number'
    }
}

const InputNumbers = 130;
const OutPutNumber = OddEvenNumber(InputNumbers);
console.log(OutPutNumber);

// problem 5 not the list Odd even number------------

function make_avg(array) {
    let average = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        const element = array[i];
        console.log(element);
        average = average + element;
    }
    average = average / array.length;
    average = average.toFixed(2);
    average = parseFloat(average);
    return average;
}
const Arrar_num = [23, 45, 56, 67, 78, 89]
console.log(make_avg(Arrar_num));

// average revares
function make_avg_2(array) {
    let average = 0;
    for (let i = 0; i >= array.length; i++) {
        const element = array[i];
        console.log(element);
        average = average + element;
    }
    average = average / array.length;
    average = average.toFixed(2);
    average = parseFloat(average);
    return average;
}
const Arrar_num_2 = [23, 45, 56, 67, 78, 89]
console.log(make_avg(Arrar_num_2));

// Module - 20 give you 4 problem . Now solve it-----------------

// Problem---------------1

function Lep_year(Year) {
    if (Year % 4 == 0 && Year % 100 !== 0 || Year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const inpu_year = 2023;
const output_year = Lep_year(inpu_year);
console.log(output_year);

// Problem---------------2

function OddEvenNumber2(inIntegers2) {
    if (inIntegers2 % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const InputNumber2 = 133;
const OutPutNumber2 = OddEvenNumber2(InputNumber2);
console.log(OutPutNumber2);

// problem----------------3

function houre_munites(houres) {
    const munites = houres * 60;
    return munites;
}

const inHoures = 4;
const outmunit = houre_munites(inHoures);
console.log(outmunit);

// Problem----------------4

function houre_socuend(Houres) {
    const socuend = Houres * 3600;
    return socuend;
}

const inputHoures = 4;
const outsocuend = houre_socuend(inputHoures);
console.log(outsocuend);

//Problem 5 not the list-----------

function lep_year_array(a) {
    let ad = [];
    for (let i = 0; i < a.length; i++) {
        let lepyear = a[i]
        if (lepyear % 4 == 0 && lepyear % 100 !== 0 || lepyear % 400 == 0) {
            ad.push(lepyear)
        }
    }
    return ad
}

const my_array = [2022, 2023, 2024, 2028, 2030, 2032];
const my_lepYearOut = lep_year_array(my_array);
console.log(my_lepYearOut);


//Problem 6 not the list-----------

function findOddSum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element % 2 !== 0) {
            sum = sum + element;
        }
    }
    return sum
}

const tehArray = [5, 7, 8, 10, 45, 30];
const outArray = findOddSum(tehArray);
console.log(outArray);

// Module - 20.5 give you 4 problem . Now solve it-----------------

// Problem-------------------1
// Celsius to Fahrenheit Formula : ??F = (??C * 1.8) + 32

function celsiusToFahrenhite(Celsius) {
    const fahrenhite = (Celsius * 1.8) + 32;
    return fahrenhite;
}

const inputCelsius = 12;
const outFahrenhite = celsiusToFahrenhite(inputCelsius);
console.log(outFahrenhite);

// Problem-------------------2
// Fahrenheit to Celsius Formula : ??C = (??F - 32) ?? 5/9

function fahrenhiteToCelsius(fahrenhite) {
    const Celsius = (fahrenhite - 32) * 5 / 9;// * 1.8
    return Celsius
}

const inputFahrenhite = 53.6;
const outCelsius = fahrenhiteToCelsius(inputFahrenhite);
console.log(outCelsius);

// Problem--------------------3

function grading(marks) {
    if (marks >= 80) {
        return 'A+'
    }
    else if (marks >= 70) {
        return 'A'
    }
    else if (marks >= 60) {
        return 'B'
    }
    else if (marks >= 50) {
        return 'C'
    }
    else if (marks >= 40) {
        return 'D'
    }
    else {
        return 'F'
    }
}

const inMark = 55;
const grad = grading(inMark);
console.log(grad);

// Problem---------------------4
// SI Formula	S.I. =    {    (Principal ?? Rate ?? Time) / 100               }

function SIformula(p, r, t) {
    const interest = (p * r * t) / 100;
    return interest
}

const Principal = 5000;
const Rate = 5;
const Time = 5;
const totleInterest = SIformula(Principal, Rate, Time);
console.log(totleInterest);

// CI Formula	C.I. =    {    Principal *(1 + Rate/100)tothePower(Time)   }

function CIformula(p, r, t) {
    const totleint = (p * Math.pow((1 + (r / 100)), t));
    let interest = totleint.toFixed(2);
    interest = parseFloat(interest);
    return interest
}

const Principal_c = 5000;
const Rate_c = 5;
const Time_c = 5;
const totleInterest_c = CIformula(Principal_c, Rate_c, Time_c);
console.log(totleInterest_c);


// Module - 21  give you 5 problem . Now solve it-----------------

// Problem-------------------1

function loestNumber(array) {
    let findNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < findNumber) {
            findNumber = element;
        }
    }
    return findNumber
}

const inArray = [25, 52, 45, 22, 11, 31, 12, 86, 91,];
const outLoestNumber = loestNumber(inArray);
console.log(outLoestNumber);

// Problem-------------------2

function smallestNumber(a, b, c) {
    if (a < b && a < c) {
        return a
    }
    else if (b < a && b < c) {
        return b
    }
    else {
        return c
    }
}

const Number1 = 34;
const Number2 = 24;
const Number3 = 54;
const outputNumber = smallestNumber(Number1, Number2, Number3);
console.log(outputNumber);

// Problem-------------------3

function ArrayAvg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum = sum + element;
    }
    const avg = sum / array.length;
    return avg
}

const arrayinPut = [25, 52, 45, 22, 11, 31, 12, 86, 91,];
const avg = ArrayAvg(arrayinPut);
console.log(avg);

// Problem------------------4

function areaOFrectangle(L, H) {
    const areaLH = L * H
    let area = Math.pow(areaLH, 2);

    return area
}

const Length = 15;
const Hight = 5;
const Area = areaOFrectangle(Length, Hight);
console.log(Area);

// Problem------------------5

// console.log("Largest Number in the array is ", largestNum);
// console.log("Second Largest Number in the array is ", secondLargestNum);


function secondLargestNum(array) {

    let lgnum = array[0];
    let Slgnum = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > lgnum) {
            Slgnum = lgnum;
            lgnum = array[i];
        }
        else if (array[i] !== lgnum && array[i] > Slgnum) {
            Slgnum = array[i];
        }

    }
    return Slgnum
}

const inputArray = [50, 26, 54, 59, 94, 15, 98, 84];
const secondLargest = secondLargestNum(inputArray);
console.log(secondLargest);

// Module - 22  give you 2 problem . Now solve it-----------------

// Problem------------------1

function isPrime(num) {

    if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
    else {
        return 'please enter a number greater then 1';
    }

}

console.log(isPrime(55));


// Problem------------------2


// Module - 22.5  give you 5 problem . Now solve it-----------------

// Problem------------------1 

function feetToInch(F) {
    const feet = 12 * F;
    return feet
}

const infeet = 5;
const outInch = feetToInch(infeet);
console.log(outInch, 'In');

// Problem------------------2

function centimeterToMeter(C) {
    const meter = C / 100;
    return meter
}

const incentimeter = 1000;
const outmeter = centimeterToMeter(incentimeter);
console.log(outmeter, 'm');

// Problem------------------3

function paperRequirements(book1, book2, book3) {
    const booksPage1 = 100;
    const booksPage2 = 200;
    const booksPage3 = 300;

    const firstbook = booksPage1 * book1;
    const secendbook = booksPage2 * book2;
    const thardbook = booksPage3 * book3;

    const totlePage = firstbook + secendbook + thardbook;
    return totlePage
}

const book1 = 2;
const book2 = 4;
const book3 = 5;
const TotlePage = paperRequirements(book1, book2, book3)
console.log(TotlePage);

// Problem------------------4

function bestFriend(array) {
    let friend = array[0];
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        if (element.length > friend.length) {
            friend = element;
        }
    }
    return friend
}

const inFrnd = ['sakib', 'faysal bin nasir', 'rakib', 'mehedi']
const outBestFrnd = bestFriend(inFrnd);
console.log(outBestFrnd);

// Problem------------------5

function findPositive(array) {
    let posetive = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > 0) {
            posetive.push(element);
        }
        else {
            break
        }
    }
    return posetive
}

const numArray = [50, 26, 54, -59, 94, 15, 98, 84];
const positive = findPositive(numArray);
console.log(positive);



// Prime number ---------------


/* ------------------------------------------\
           ------Assignment 4------
\-------------------------------------------*/
// problem--------1

function radianToDegree(radias) {
    if (typeof radias === "number") {
        let digre = radias * (180 / 3.14159)
        digre = digre.toFixed(2)
        digre = parseFloat(digre)
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

// problem---------------2

function isJavaScriptFile(filename) {
    const file = typeof filename;
    if (file === "string") {
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

console.log(isJavaScriptFile(65168556));
console.log(isJavaScriptFile('js.png'));
console.log(isJavaScriptFile('image.js.png'));
console.log(isJavaScriptFile('image.png.js'));

// problem----------------3

function oilPrice(D, P, O) {
    const diesel = 114;
    const petrol = 130;
    const octane = 135;
    if (typeof D === "number" && typeof P === "number" && typeof O === "number") {
        const dieselPrice = diesel * D;
        const petrolPrice = petrol * P;
        const octanePrice = octane * O;
        const totlePrice = dieselPrice + petrolPrice + octanePrice;

        return totlePrice;
    }
    else {
        return "error";
    }

}

console.log(oilPrice(1, 1, 1));
console.log(oilPrice(30, 20, 10));
console.log(oilPrice("30", 20, 10));
console.log(oilPrice(1, 0, 2));
console.log(oilPrice(0, 2, 3));

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

console.log(publicBusFare(50));
console.log(publicBusFare(55));
console.log(publicBusFare(112));
console.log(publicBusFare('hfuhififuvb'));
console.log(publicBusFare(235));
console.log(publicBusFare(365));

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

console.log(isBestFriend({ name: "abul", friend: "babul" }, { name: "babul", friend: "abul" }));
console.log(isBestFriend({ name: "abul", friend: "kabul" }, { name: "kabul", friend: "sabul" }));
console.log(isBestFriend({ name: "deo", friend: "alex" }, { name: "deo", friend: "jhon" }));
console.log(isBestFriend({ name: "abul", friend: "habul" }, { name: "habul", friend: "abul" }));
console.log(isBestFriend(3773, { name: "habul", friend: "abul" }));