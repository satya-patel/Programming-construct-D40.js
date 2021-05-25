//SEQUENCE PRACTICE PROBLEMS

//1
{
    let digit = Math.floor(Math.random()*10);
    console.log(digit);
}

//2
{
    let digit = Math.floor(Math.random()*10)%6+1;
    console.log("Dice Roll: "+digit);
}

//3
{
    let dice1 = Math.floor(Math.random()*10)%6+1;
    let dice2 = Math.floor(Math.random()*10)%6+1;
    let sum = dice1+dice2;
    console.log("Dice Roll Sum: "+sum);
}

//4
{
    let digit1 = Math.floor(Math.random()*100);  
    let digit2 = Math.floor(Math.random()*100);
    let digit3 = Math.floor(Math.random()*100);
    let digit4 = Math.floor(Math.random()*100);
    let digit5 = Math.floor(Math.random()*100);
    let sum = digit1+digit2+digit3+digit4+digit5;
    let avg = sum/5;
    console.log("Sum: "+ sum+ " Average: "+avg); 
}

//5
const inch = 1/12;
console.log(42 * inch + "ft");
const meter = 0.3048;
console.log(60 * meter + " X " + 40 * meter + " Meters");
let areaInMeters = 60*meter*40*meter;
const noOfPlots = 25;
const acre = 4046.86;
console.log(areaInMeters * acre * noOfPlots + " Acres");