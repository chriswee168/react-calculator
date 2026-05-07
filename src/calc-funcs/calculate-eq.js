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

    // Used to indicate which operators take precedence over others.
    const opMap = new Map();
    opMap.set('+', 0);
    opMap.set('-', 0);
    opMap.set('*', 1);
    opMap.set('/', 1);

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
                // Select pair of numbers in string format with highest order operation.
                // (e.g. multiplication comes before addition.)
                let idx0 = 0, idx1 = 1, idx2 = 2;
                let bestOpVal = opMap.get(tempStack[idx1]);
                for (let j = 0; j < tempStack.length - 1; j += 2)
                {
                    if ((opMap.get(tempStack[j + 1])) >= bestOpVal)
                    {
                        idx0 = j + 2; idx1 = j + 1; idx2 = j;
                        bestOpVal = opMap.get(tempStack[j + 1]);
                    }
                }
                console.log(tempStack, idx0, idx1, idx2);
                const result = opCalc(tempStack[idx0], tempStack[idx1], tempStack[idx2]);
                tempStack.splice(idx2, 3, result);
                console.log(tempStack, idx0, idx1, idx2);
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