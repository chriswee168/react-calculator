import { opCalc } from "./op-calc";

/**
 * Main function to process and calculate the equation.
 * 
 * @param {string} eqString Equation as string.
 * @returns Result as string.
 */
export function calculate(eqString)
{
    // Mutable list to store characters from eqString.
    const stringStack = [];
    let result;

    // For each character in equation.
    for (let i = 0; i < eqString.length; i++)
    {
        if (eqString[i] == ')')
        {
            // Calculate result of (num1, operator, num2), pop the three strings
            // off the stack and push result as string.
            do
            {
                result = opCalc(stringStack.at(-3), stringStack.at(-2), stringStack.at(-1));
                for (let j = 0; j < 3; j++)
                {
                    stringStack.pop();
                }
                stringStack.push(result);
            }
            // Stop and remove open bracket when encountered.
            while (stringStack.at(-2) != '(');
            stringStack.splice(-2, 1);
        }
        else
        {
            // Join characters of numbers with more than one digit or decimal point.
            if ((!isNaN(stringStack.at(-1)) && !isNaN(eqString[i])) || 
                stringStack.at(-1) == '.' || 
                eqString[i] == '.'
            )
            {
                stringStack[stringStack.length - 1] += eqString[i];
            }
            else
            {
                stringStack.push(eqString[i]);
            }
        }

        console.log(stringStack);
    }

    return stringStack[0];
}