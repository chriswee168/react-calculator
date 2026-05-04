/**
 * Perform a calculation between two numbers as a string.
 * 
 * @param {string} string0 Number 1 string
 * @param {string} opChar Operator
 * @param {string} string2 Number 2 string
 * @returns Calculation result as string.
 */
export function opCalc(string0, opChar, string2)
{
    const num1 = Number(string0);
    const num2 = Number(string2);
    let result;

    switch (opChar)
    {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;

        default:
            result = undefined;
            break;
    }

    return result.toString();
}