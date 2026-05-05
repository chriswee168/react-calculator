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
    const charStack = [];
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
                result = opCalc(charStack.at(-3), charStack.at(-2), charStack.at(-1));
                for (let j = 0; j < 3; j++)
                {
                    charStack.pop();
                }
                charStack.push(result);
            }
            // Stop and remove open bracket when encountered.
            while (charStack.at(-2) != '(');
            charStack.splice(-2, 1);
        }
        else
        {
            // Join characters of numbers with more than one digit.
            if (!isNaN(charStack.at(-1)) && !isNaN(eqString[i]))
            {
                charStack[charStack.length - 1] += eqString[i];
            }
            else
            {
                charStack.push(eqString[i]);
            }
        }

        console.log(charStack);
    }

    return charStack[0];
}