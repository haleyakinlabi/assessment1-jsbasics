///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day off the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/
//Index [0] = Mon, [2]= Tue, [2]= Wed, ect

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

//const fujiPrice = .89 
//const galaPrice = .64
//const pinkPrice = .55



// PROBLEM 1

/*

    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/


// CODE HERE

//New Answer:
let totalAcres = 0

for(let i = 0; i < fujiAcres.length; i++){
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}
console.log(totalAcres)

//Original Answer:
//function fujiAcres(array){
    //let sum = 0 // the sum is initialed to 0
    //for (let i = 0; i < 
        //ujiAcres.length; i += 1) {
        // take every item in the array and add it to sum variable
        //sum += array[i]

//function galaAcres(array){
    //let sum2 = 0 // the sum is initialed to 0
        //for (let z = 0; z < 
            //galaAcres.length; z += 1) {
            // take every item in the array and add it to sum variable
            //sum2 += array[z]

//function pinkAcres(array){
    //let sum3 = 0 // the sum is initialed to 0
            //for (let y = 0; y < 
                    //fujiAcres.length; y += 1) {
                    // take every item in the array and add it to sum variable
                    //sum3 += array[y]           


/*

// I'll be 100% honest and admit that I wasn't sure how to complete this problem so I looked up 
//several solutions on the web. 


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
 
//New Answer:
let averageDailyAcres = totalAcres / 7
console.log(averageDailyAcres)


//Original Answer:
//used calculator to determine the average
//let averageDailyAcres = 3




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
//Write a while loop that will continue to run
//while `acresLeft` is above 0. 
//add 1 to the `days` variable
//- subtract your daily average from the number of acres left

//New Answer:
while (acresLeft > 0){
    days++ 
    acresLeft -= averageDailyAcres
}
console.log(days)

//Original Answer:
//while (acresLeft > days) {
    //days++
    //console.log(acresLeft, days)
//}


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

//New Answer:

let fujiTons = []
let galaTons = []
let pinkTons = []

for(let j = 0; j < fujiAcres.length; j++){
    fujiTons.push(fujiAcres[j] * 6.5)
    galaTons.push(galaAcres[j] * 6.5)
    pinkTons.push(pinkAcres[j] * 6.5)
}
console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)

//Original Answer: 
//let fujiTons = fujiAcres.slice(0, 7)
    //console.log('fugitons',fujiTons)
    
    //for(j = fujiTons[0] + 6.5 * ; j < fujiTons.length, j++
    


//let galaTons = galaAcres.slice(0,7)
    //console.log('galatons', galaTons)

//let pinkTons = pinkAcres.slice(0,7)
    //console.log('pinktons', pinkTons)

// Wasn't sure how to complete this one and ended up just writing on paper and using a calculator. 




// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

//New Answer:
let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for(let k = 0; k < fujiTons.length; k++){
    fujiPounds += fujiTons[k] * 2000
    galaPounds += galaTons[k] * 2000
    pinkPounds += pinkTons[k] * 2000
}
console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)

//Original Answer:
//used calculator

 //let fujiPounds = 214289.3
 //97.2 Tons
 //let galaPounds = 372581
 //169 Tons
 //let pinkPounds = 315481.5
 //143.1 Tons






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55
// CODE HERE

//New Answer: 

let Galaprofit = galaPrice * galaPounds
let Fujiprofit = fujiPrice * fujiPounds
let Pinkprofit = pinkPrice * pinkPounds

console.log(Galaprofit)
console.log(Fujiprofit)
console.log(Pinkprofit)

//Original Answer:
//let fugiProfit = fujiPounds * .89
    //console.log(fugiProfit)

//let galaProfit = galaPounds * .64
    //console.log(fugiProfit) 
    
//let pinkProfit = pinkPounds * 55
    //console.log(pinkProfit)

// let galaProfit =
// let pinkProfit =
//let fujiProfit = 

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

//New Answer:
let totalProfit = Pinkprofit + Fujiprofit + Galaprofit
console.log(totalProfit)


//Original Answer:
//let totalProfit = pinkProfit + fugiProfit + galaProfit 
//console.log(totalProfit)