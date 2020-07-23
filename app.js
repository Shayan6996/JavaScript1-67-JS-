// Assignment 1

// Question 1
alert("Greetings");

// Question 2
alert("Error! Please enter a valid password");

// Question 3
alert("Welcome to JS Land... \nHappy Coding!");

// Question 4
alert("Welcome to JS Land...");
alert("Happy Coding!");

// Question 5
console.log("Hello... I can run JS through my web browser's console");




// Assignment 2

//  Question 1
var username;

// Question 2
var myname;
myname = "Syed Shayan Ahmed";

//Question 3
var message;
message = "Hello World";
alert(message);

//Question 4
var name = "Jhone Doe";
var age = "15 years old";
var job = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(job);

// Question 5
alert("pizza\npizz\npiz\npi\np");

// Question 6
var email;
email = "example" + "@" + "example" + ".com";
alert(email);

// Question 7
var book;
book =  "A smarter way \n to learn JavaScript";
alert("I am trying to learn from the book"+ book);

// Question 8
var a = "YAH! I can write HTML content through Javascript";
document.write("<br>" + "<br>" + "<br>" + a);

// Question 9
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");




// Assignment 3 

// Question 1
var age;
age = 22;
alert(age);

// Question 2
alert("You have visited this site N times?");
var time = +prompt("Enter the times you have visited");
alert("You have visited " + time + " Number of times");

// Question 3
var birthyear = +prompt("Enter your Birthyear");
document.write("My birthyear is " + birthyear);
if (birthyear === birthyear )
{
    document.write("Data type of my declared variable is number");
}

// Question 4
var name = prompt("Enter visitors name");
var prodcut = prompt("Enter product Title");
var quantity = +prompt("Enter Quantity visitor wants to order");
document.write(name + " ordered " + quantity + " " + " " + prodcut +  " on XYZ Clothing store");

// Assignment 4

// Question 1
var name,age,number;

// Assignment 5

// Question 1
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var c = num1 + num2;
document.write("Sum of " + num1 + " " + "and " + num2 + " is "  + c );

// Question 2
//subtraction
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var c = num1 - num2;
document.write("Subtraction of " + num1 + " " + "and " + num2 + " is "  + c );
//multipy
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var c = num1 * num2;
document.write("Multiplication of " + num1 + " " + "and " + num2 + " is "  + c );
//division
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var c = num1 / num2;
document.write("Division of " + num1 + " " + "and " + num2 + " is "  + c );
//modulus   
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var c = num1 % num2;
document.write("Modulus of " + num1 + " " + "and " + num2 + " is "  + c );

// Question 3
var a;
document.write("Value after variable declaration is " + a);
var a = 5;
document.write("Initial value: " + a);
var a = ++a;
document.write("Value after Increment is: " + a);
var a = a + 7;
document.write("Value after addition is: " + a);
var a = --a;
document.write("Value after Decrement is: " + a);
var a = a % 3;
document.write("The remainder is:" + a);

// Question 4
var movieTicket = 600;
var a = movieTicket * 5;
document.write("Total cost to buy 5 tickets to a movie is " + a + " PKR");

// Question 5
document.write("Table of 4" + "<br>");
for(i = 1 ; i <=10 ; i++)
{
    document.write("4 " + "x " + i + " =" + 4  * i + "<br>");
}

// Question 6
var celcius = 38;
var faren = (celcius * 9/5)+32;
document.write(celcius + "C is " + faren + " F" + "<br>");
var Fh = 100.4;
var centi = (Fh - 32)*5/9;
document.write(Fh + "F is " + centi + " C");

// Question 7
var priceItem1 = 650;
var priceItem2 = 100;
document.write("Price of item 1 is " + priceItem1 + "<br>");
var quantityItem1 = 3;
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
var quantityItem2 = 7;
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges 100" + "<br>");
var total = (priceItem1 * quantityItem1) + (priceItem2  * quantityItem2) + 100;
document.write("Total cost of your order is " + total);

// Question 8
document.write("MARKSHEET" + "<br>" + "<br>" + "<br>");
var totalMarks = 980;
var MarksObtained = 804;
var total = (804/980)*100;
document.write("Total marks " + totalMarks + "<br>");
document.write("Marks otained " + MarksObtained + "<br>");
document.write("Percentage " + total + "<br>");

// Question 9
var usDollar = 10;
var saudiRiyal = 25;
document.write("Total Currency in PKR: " + (104.80 * usDollar + saudiRiyal * 28) );

// Question 10
var a = 10;
var b = ((a + 5)*10)/2;
document.write(b);

// Question 11
document.write("Age Calculator" + "<br>" + "<br>");
var currentYear = 2016;
var birthYear = 1992;
var age = currentYear - birthYear;
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your age is : " + age + "<br>");

// Question 12
document.write("The Geometrizer" + "<br>" + "<br>");
var radius = 20;
document.write("Radius of a circle: " + radius + "<br>");
var circumFerence = 2 * radius * 3.142;
document.write("The circumference is: " + circumFerence + "<br>");
var area = 3.142 * (radius * radius);
document.write("The area is: " + area + "<br>");    

// Question 13
document.write("The Lifetime Supply Calculator" + "<br>" + "<br>");
var favSnack = "Zinger Burger";
var currentAge = 15;
var estimateAge = 65;
var estimateAmount = 3;
var result = (estimateAge - currentAge) * estimateAmount;
document.write("Favorite Snack: " + favSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum age: " + estimateAge + "<br>");
document.write("Amount of snacks per day: " + estimateAmount + "<br>");
document.write("You will need " + result + " " + favSnack + " to last  you until the ripe age of " + estimateAge);


// Assingmnet 6 - 9

// Question 1
document.write("Result:" + "<br>");
var a = +prompt("Enter the value");
document.write("The Value of a is: " + a + "<br>" + "<br>");
document.write(".................." +  "<br>" + "<br>" );
document.write("The value of ++a is: " + ++a +"<br>" );
document.write("Now The value of a is: " + a + "<br>" +"<br>");
document.write("The value of a++ is: " + a++ + "<br>" );
document.write("Now The value of a is: " + a + "<br>" +"<br>");
document.write("The value of --a is: " + --a + "<br>");
document.write("Now The value of a is: " + a + "<br>" +"<br>");
document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now The value of a is: " + a + "<br>");

// Question 2
var a = 2;
var b = 1;
var c = --a - --b + ++b  + b--;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + c + "<br>");


// Question 3
var name  = prompt("Enter your name");
alert("Hello " + name );

// Question 5
var a;
var number = +prompt("Enter the number");
for(i = 1 ; i<=10; i++)
{
   
    document.write(number + " x" + i + " =" + number * i + "<br>")
}

// Question 6
var a ,b ,c;
var x ,y ,z;
var a = prompt("Enter first subject");
var b = prompt("Enter second subject");
var c = prompt("Enter third subject");
var totalMarks = 100;
var x = +prompt("Obtained marks first subject");
var y = +prompt("Obtained marks second subject");
var z = +prompt("Obtained marks third subject");
var finalMarks = x + y +z;
var percentage = finalMarks/(3*100)*100;
document.write("Subject  " + "TotalMarks  " + "ObatainedMarks  " + "Percentage" + "<br>");
document.write(a  + "    " +"    " + totalMarks + "    " + "    " + x + "    "+ "   " + x + "%" + "<br>");
document.write(b  + "    " +"    " + totalMarks + "    " + "    " + y + "    "+ "   " + y + "%" + "<br>");
document.write(c  + "    " +"    " + totalMarks + "    " + "    " + z + "    "+ "   " + z + "%" + "<br>");
document.write(3*totalMarks  + "    " +"    " + finalMarks + percentage + "%" + "<br>");

// Assignment 9 - 11

// Question 1
var city = prompt("Enter your city");
 if(city == "karachi" )
{
    alert("Welcome to city of lights");
}
else
{
    alert("Enter again");
}

// Question 2
var gender = prompt("Enter your gender Male or Female");
if(gender == "Male")
{
    alert(" Good Morning Sir");
}
else if(gender == "Female")
{
    alert("Good Morning Ma’am")
}
else
{
    alert("Incorrect Entry");
}

// Question 3

var color = prompt("Enter The traffic sign Color");
if(color == "Red")
{
    alert("Must Stop");
}
else if (color == "Yellow")
{
    alert("Ready to move");
}
else if (color == "Green")
{
    alert("Move Now");
}
else
{
    alert("Incorrect Entry");
}

// Question 4
var fuel = +prompt("Enter the Fuel");
if (fuel < 0.25)
{
    alert("Please refill the fuel in your car");
}
else
{
    alert("Your good to go");
}


// Question 5

var a = 4; // Alert message works
if (++a === 5)
{
alert("given condition for variable a is true");
}

var b = 82;  //Alert message not-works
if (b++ === 83)
{
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13)  // Alert message works
{
alert("condition 1 is true");
}
if (c === 13)
{
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}


var materialCost = 20000;  // Alert message works
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost)
{
alert("The cost equals");
}

if (true) // Alert message works
{
alert("True");
}
if (false)
{
alert("False");
}

if("car" < "cat") // Alert message works
{
    alert("car is smaller than cat");
}
    
 // Question 6

document.write("MarkSheet" + "<br>" + "<br>");
var subject1 = +prompt("Enter First Subject Marks");
var subject2 = +prompt("Enter Second Subject Marks");
var subject3 = +prompt("Enter Third Subject Marks");
var totalMarks = 300;
document.write("Total marks: " + totalMarks + "<br>" );
var ObtainedMarks = subject1 + subject2 +subject3;
document.write("Marks otained: " + ObtainedMarks  + "<br>");
var percentage = (ObtainedMarks/totalMarks) * 100;
document.write("Percentage: " + percentage  + "<br>");
if(percentage >= 80 && percentage <= 100)
{
document.write("Grade: A-one"+ "<br>" );
document.write("Remarks: Excellent");
}
else if(percentage >= 70 && percentage <80)
{
document.write("Grade: A"+ "<br>" );
document.write("Remarks: Good");
}
else if(percentage >= 60 && percentage <70)
{
document.write("Grade: B "+ "<br>" );
document.write("Remarks: You need to improve");
}
else if(percentage <60)
{
document.write("Grade: Fail "+ "<br>" );
document.write("Sorry");
}
else
{
    document.write("Incorrect Entry");
}

// Question 7

document.write("Guess Game:" + "<br>"+ "<br>"+ "<br>");
var secretNumber = 6;
var guessNumber = +prompt("Guess the Secret number");
if(guessNumber === secretNumber)
{
    document.write("Bingo! Correct answer");
}
else if((guessNumber + 1) === secretNumber )
{
    document.write("Close enough to the correct answer");
}
else
{
    document.write("Wrong Answer!");
}

// Question 8

var num = +prompt("Enter Any number to check wheter it is divisble by 3");
if (num % 3 === 0)
{
    alert("It is divisible by 3");
}
else
{
    alert("It is not divisible by 3");
}

// Question 9
var num = +prompt("Enter any number to check wheter it is even or odd");
if(num % 2 === 0)
{
alert("Number is Even");
}
else
{
 alert("The number is odd");
}

// Question 10
var temp = +prompt("Enter the temperature");
if(temp > 40)
{
    alert("It is too hot outside.");
}
else if(temp >30 && temp <=39)
{
    alert("The Weather today is Normal.")
}
else if(temp >20 && temp <=29)
{
    alert("Today’s Weather is cool.")
}
else if(temp >10 && temp <=19)
{
    alert("OMG! Today’s weather is so Cool.")
}

// Question 11
var firstNumber = +prompt("Enter First Number");
var secondNumber = +prompt("Enter Second Number");
var fun = prompt("What do you want to do ?" +  "\nAdd,Subtract,Multiply,Divide,Modulus");
if(fun == "Add")
{
    document.write(firstNumber + secondNumber);
}
else if(fun == "Subtract")
{
    document.write(firstNumber - secondNumber);
}
else if(fun == "Multiply")
{
    document.write(firstNumber * secondNumber);
}
else if(fun == "Divide")
{
    document.write(firstNumber / secondNumber);
}
else if(fun == "Modulus")
{
    document.write(firstNumber % secondNumber);
}
else
{
    alert("Incorrect Entry");
}


// Assignment 12 - 13

// Question 2

var num1 = +prompt("Enter First Integer");
var num2 = +prompt("Enter Second Integer");
if(num1 > num2)
{
    alert(num1 + " is bigger");
}
else
{
    alert(num2 + " number is bigger");
}

// Question 3
var number = +prompt("Enter any number");
if(number > 0)
{
    alert("The number is postive")
}
else if(number < 0)
{
    alert("The number is negative");
}
else if (number === 0)
{
    alert("The number is zero");
}
else
{
    alert("Incorrect Number");
}

// Question 4 
var ch = prompt("Enter a single Character");
if (ch == "A" || ch == "a" || ch == "E" || ch == "e" || ch == "I" || ch == "i" || ch == "O" || ch == "o" ||ch == "U" || ch == "u" )
{
    alert("It is a Vowel");
}
else
{
    alert("It is not a Vowel");
}

// Question 5
var passWord = "Fuhrer"
var pass = prompt("Enter his/her password");
if(pass === passWord )
{
    if(passWord === pass)
    {
        alert("Correct! The password you entered matches the original password");
    }
}
else
{
    alert(" Please enter your password");
}

// Question 6
var greeting;
var hour = 13;
if (hour < 18) 
{
greeting = "Good day";
alert(greeting);
}
else
{
greeting = "Good evening";
alert(greeting);
}

// Question 7
var time = +prompt("Enter Time in  24 hours clock format like: 1900 = 7pm");
if(time >= 0000 && time < 1700)
{
    alert("Good Morning");
}
else if (time >= 0000 && time < 1700)
{
    alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100)
{
    alert("Good Morning");
}
else if (time >= 2100 && time <= 2359)
{
    alert("Good Night");
}
else
{
    alert("Incorrect time");
}


// Assingment 14 -16


// Question 1
var students = [];

// Question 2
var students = array("","","");

// Question 3
var name = ["Syed", "Shayan","Ahmed"];

// Question 4
var numbers = [0,1,2,3];

// Question 5
var boolean = [0,1];

// Question 6
var mix = ["Name","Shayan","Age",22];

// Question 7
var education = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
document.write("1)" + education[0]+ "<br>");
document.write("2)" + education[1]+ "<br>");
document.write("3)" + education[2]+ "<br>");
document.write("4)" + education[3]+ "<br>");
document.write("5)" + education[4]+ "<br>");
document.write("6)" + education[5]+ "<br>");
document.write("7)" + education[6]+ "<br>");
document.write("8)" + education[7]+ "<br>");

// Question 8
var names = ["Michael","John","Tony"];
var scores = [320,230,480];
var totalMarks = 500;
var percentage1 = (320/500)*100; 
var percentage2 = (230/500)*100;
var percentage3 = (480/500)*100;
document.write("Score of " + names[0] + " is " + scores[0] +"." + " Percentage:" + percentage1 + " %" + "<br>");
document.write("Score of " + names[1] + " is " + scores[1] +"." + " Percentage:" + percentage2 + " %" + "<br>");
document.write("Score of " + names[2] + " is " + scores[2] +"." + " Percentage:" + percentage3 + " %" + "<br>");


// Question 9
var color = ["Red", "Blue", "Green"];
document.write(color + "<br>");
var add = prompt("Which color do you want to add at the beginning");
color.unshift("Black"); 
document.write(color + "<br>");
var addE = prompt("Which color do you want to add at the end");
color.push("Purple");
document.write(color  + "<br>");
alert("Add two more colors at the beginning");
var add2 = prompt("Which color do you want to add at the beginning");
var add21 = prompt("Which color do you want to add at the beginning");
color.unshift("orange");
color.unshift("White");
document.write(color + "<br>");
color.shift();
document.write(color + "<br>");
color.pop();
document.write(color + "<br>");
var mid = prompt("Which color you want to add");
var mid1 = +prompt("At which position");
var copycolor = color.slice(2,1);
document.write(copycolor + "<br>");

// Question 10
var scores = [320,230,480,120];
document.write("Score of Students:" + scores + "<br>")
document.write("Ordered Scores of Students: " + scores[3]+ " " + scores[1] + " " + scores[0] + " " + scores[2] );



// Question 11
var city = ["Karachi" ,"Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities list:" + "<br>" + city +"<br>" );
document.write("Selected Cities list:" + "<br>"+ city[2] +"," +city[3]);

// Question 12
var arr = ["This ", " is ", " my ", " cat"];
document.write("Array:" + "<br>" + arr + "<br>");
document.write("String: " + "<br>" + arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3] + " " );

// Question 13
var val = ["keyboard" , "Mouse" , "Printer" , "Moniter"];
document.write("Devices:" + "<br>" + val + "<br>" + "<br>");
document.write("Out:" + "<br>" + val[0] + "<br>");
document.write("Out:"  + "<br>"+ val[1] + "<br>");
document.write("Out:" + "<br>" + val[2] + "<br>");
document.write("Out:" + "<br>" + val[3] + "<br>");

// Question 14
var val = ["keyboard" , "Mouse" , "Printer" , "Moniter"];
document.write("Devices:" + "<br>" + val + "<br>" + "<br>");
document.write("Out:" + "<br>" + val[3] + "<br>");
document.write("Out:"  + "<br>"+ val[2] + "<br>");
document.write("Out:" + "<br>" + val[1] + "<br>");
document.write("Out:" + "<br>" + val[0] + "<br>");

// Assingment 17 - 20

// Question 1
var arr = [[]];

// Question 3
for(var i = 1; i <= 10; i++)
{
    document.write(i + "<br>");
}

// Question 4
var num = +prompt("Enter a number to show its multiplication table");
var length = +prompt("Enter length of multiplication table");
document.write("Multiplication table of " + num + "<br>");
document.write("Length " + length + "<br>");
for(var i = 1; i <= length ; i++ )
{
    document.write(num + " x " + i + " = " + (num * i) + "<br>");  
}

// Question 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write(fruits[0] + "<br>" + fruits[1] + "<br>" + fruits[2] + "<br>" + fruits[3] + "<br>" + fruits[4] + "<br>" + "<br>" );
for( var i = 0; i < fruits.length; i++ )
{
    document.write("Element at index " + i  + " is " + fruits[i] + "<br>") ;
    
} 

// Question 6
document.write("Counting:" + "<br>");
for(i = 1; i <=15;i++)
{
    document.write(i +",");
}
document.write("<br>" + "<br>");

document.write("Reverse counting:" + "<br>");
for(j = 10; j >=1;j--)
{
    document.write(j +",");
}

document.write("<br>" + "<br>");

document.write("Even:" + "<br>");
for(c = 2; c < 21; c=c+2)
{
    document.write(c +",");
}
document.write("<br>" + "<br>");

document.write("Odd:" + "<br>");
for(z = 1; z < 20; z=z+2)
{
    document.write(z +",");
}

document.write("<br>" + "<br>");

document.write("Series:" + "<br>");
for(a = 2; a < 21; a=a+2)
{
    document.write(a + "k"+",");
}

// Question 7
var product = ["cake", "applepie", "cookie", "chips", "patties"];
var order = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
for(var i = 0; i <= product.length; i++)
{
if(product[0] === order || product[1] === order || product[2] === order || product[3] === order || product[4] === order)
{
    document.write(order + " is available at index " + i + " in our bakery");
    break
}
else
{
    document.write("We are Sorry. " + order + " in not available in our baker");
}
break
}

// Question 8

var a = [24, 53, 78, 91, 12];
document.write("Array iteams: " + a + "<br>");
for(var i = 0; i <= a.length; i++)
{
    if(a[0] > a[1] && a[0] > a[2] && a[3] > a[1] && a[4] > a[1])
    {
        document.write("The largest number is " + a[0]);
    }
    else if(a[1] > a[0] && a[1] > a[2] && a[1] > a[3] && a[1] > a[4])
    {
        document.write("The largest number is " + a[1]);
    }
    else if(a[2] > a[0] && a[2] > a[1] && a[2] > a[3] && a[2] > a[4])
    {
        document.write("The largest number is " + a[2]);
    }
    else if(a[3] > a[0] && a[3] > a[1] && a[3] > a[2] && a[3] > a[4])
    {
        document.write("The largest number is " + a[3]);
    }
    else
    {
        document.write("The largest number is " + a[4]);
    }
    break
}

// Question 9

var b = [24, 53, 78, 91, 12];
document.write("Array iteams: " + b + "<br>");
for(var j = 0; j <= b.length; j++)
{
    if(b[0] < b[1] && b[0] < b[2] && b[3] < b[1] && b[4] < b[1])
    {
        document.write("The smallest number is " + b[0]);
    }
    else if(b[1] < b[0] && b[1] < b[2] && b[1] < a[3] && b[1] < b[4])
    {
        document.write("The smallest number is " + a[1]);
    }
    else if(b[2] < b[0] && b[2] < b[1] && b[2] < b[3] && b[2] < b[4])
    {
        document.write("The smallest number is " + b[2]);
    }
    else if(b[3] < b[0] && b[3] < b[1] && b[3] < b[2] && b[3] < b[4])
    {
        document.write("The smallest number is " + b[3]);
    }
    else
    {
        document.write("The smallest number is " + b[4]);
    }
    break
}

// Question 10
for(var i = 5; i <= 100; i=i+5)
{
    document.write(i + ",");
}