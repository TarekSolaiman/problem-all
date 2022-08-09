// Module - 16 to give you 4 problem . Now solve it-----------------

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


// Module - 17 to give you 4 problem . Now solve it-----------------

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


// Module - 18 to give you 4 problem . Now solve it-----------------

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


// Module - 19 to give you 4 problem . Now solve it-----------------

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

// Module - 20 to give you 4 problem . Now solve it-----------------

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

// Module - 20.5 to give you 4 problem . Now solve it-----------------

// Problem-------------------1
// Celsius to Fahrenheit Formula : °F = (°C * 1.8) + 32

function celsiusToFahrenhite(Celsius) {
    const fahrenhite = (Celsius * 1.8) + 32;
    return fahrenhite;
}

const inputCelsius = 12;
const outFahrenhite = celsiusToFahrenhite(inputCelsius);
console.log(outFahrenhite);

// Problem-------------------2
// Fahrenheit to Celsius Formula : °C = (°F - 32) × 5/9

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
// SI Formula	S.I. =    {    (Principal × Rate × Time) / 100               }

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