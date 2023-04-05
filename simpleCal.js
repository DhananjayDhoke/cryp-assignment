
function calculate(question) {
    const parts = question.split(' ');
    const num1 = parseInt(parts[2]);
    const op = parts[3];
    const num2 = parseInt(parts[4]);
  
    // Calculate the result based on the operation
    let result;
    switch (op) {
      case 'plus':
        result = num1 + num2;
        break;
      case 'minus':
        result = num1 - num2;
        break;
      case 'multiplied':
        result = num1 * num2;
        break;
      case 'divided':
        result = num1 / num2;
        break;
      default:
        return 'Invalid question.';
    }
  
    // Format the output string
    const output = `${num1} ${op} ${num2} is ${result}`;
    return output;
  }
  
  console.log(calculate("What is 5 plus 7?")) // 5 plus 7 is 12
  
  