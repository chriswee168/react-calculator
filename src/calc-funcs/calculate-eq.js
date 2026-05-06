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

            // Perform calculations on temporary stack in reverse iteration.
            do
            {
                result = opCalc(tempStack.at(-1), tempStack.at(-2), tempStack.at(-3));
                for (let j = 0; j < 3; j++)
                {
                    tempStack.pop();
                }
                tempStack.push(result);
            }
            // Add final result to the main stack and clear temporary stack.
            while (tempStack.length > 1);
            stringStack.push(tempStack[0]);
            tempStack.length = 0;
        }
        else
        {
            // Join strings of numbers with more than one digit or decimal point.
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