
/*
 * hoursWorked - number of hours worked
 *
 * input = 23
 *
 * hoursWorked (number) --> monthlyWage (number)
 *
 * calculate a wage given the number of hours worked.
 * if it's over time, rate is time and a half.
 *
 * calculateWage( hoursWorked )
 *
 * var monthlyWage = calculateWage( 40 ); // will equal 600
 * var monthlyWage = calculateWage( 41 ); // will equal 622.5
 *
 */

var calculateWage = function(hoursWorked){

    var wagePerHour = 15;

    if( hoursWorked > 40 ){

      // set a number of overtime hours
      var overtimeHours = hoursWorked - 40;

      var overtimePay = overtimeHours * ( wagePerHour * 1.5 );

      // make the multiplication calculation
      var monthlyWage = wagePerHour * 40;

      monthlyWage = monthlyWage + overtimePay;

    }else{

      var monthlyWage = wagePerHour * hoursWorked;

    }

    var output = "Bob got paid "+monthlyWage;

    return output;
};

var cumulativeTotal = 0;

var runningTotal = function(userInput){
    var parsedInput = parseInt(userInput);
    console.log(`parsedInput ${parsedInput}`)
    console.log(`cumulativeTotal in func ${cumulativeTotal}`)
    cumulativeTotal = parsedInput + cumulativeTotal;
    console.log(cumulativeTotal);
    return cumulativeTotal;
};

