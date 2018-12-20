console.log("Halo Calculator");

const calculator = {
  math: {
    add: (number1, number2) => number1 + number2,
    modulo: (number1, number2) => number1 % number2,
    multiply: (number1, number2) => number1 * number2,
    divide: (number1, number2) => number1 / number2,
    substraction: (number1, number2) => number1 - number2
  },
  shape: {
    squareArea: side => side * side,
    circleArea: r => 3.14 * r * r,
    triangleArea: (base, height) => (base * height) / 2
  },
  date: {
    createDate: () => new Date() ,
    dateNumber: dateObject => dateObject.getDate() ,
    monthNumber : dateObject => dateObject.getMonth(),
    yearNumber : dateObject => dateObject.getFullYear(),
    printToday : dateObject => {
        const month = calculator.date.monthNumber(dateObject)
        const date = calculator.date.dateNumber(dateObject)
        const year = calculator.date.yearNumber(dateObject)
        const printNow = `${date} - ${month+1} - ${year}`
        return printNow
    }
  }
};

//-------------------------------------------------------------------------------------------------------------------

console.log("Basic Mathematic Operations");

console.log("Result of (10+2)*3/(2+4) = ");

const resultOperation = calculator.math.divide(calculator.math.multiply(calculator.math.add(10,2),3),calculator.math.add(2,4))

console.log(resultOperation);

//-------------------------------------------------------------------------------------------------------------------

console.log("Basic Mathematic Formulas");

console.log("Result of cirleArea / (squareArea + triangleArea)");

const resultFormula = calculator.math.divide(calculator.shape.circleArea(7),calculator.math.add(calculator.shape.squareArea(4),calculator.shape.triangleArea(4,7)))

console.log(resultFormula);

//-------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------

console.log("Basic Date");

const today = calculator.date.createDate();

console.log(calculator.date.printToday(today));

//-------------------------------------------------------------------------------------------------------------------