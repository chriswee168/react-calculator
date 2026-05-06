import { opCalc } from "./op-calc";

/**
 * Main function to process and calculate the equation.
 * 
 * @param {string} eqString Equation as string.
 * @returns Result as string.
 */
export function calculate(eqString)
{
    const stringStack = []; // Stack to store strings from eqString.
    const tempStack = []; // Stack to store strings in reverse order.
    let result;

    // For each character in equation.
    for (let i = 0; i < eqString.length; i++)
    {
        if (eqString[i] == ')')
        {
            // Pop every string off the main stack and push them to the temporary stack
            // until an open bracket is read and removed.
            do
            {
                tempStack.push(stringStack.pop());
            }
            while (stringStack.at(-1) != '(');
            stringStack.pop();

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