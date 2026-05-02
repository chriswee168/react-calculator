/**
 * Main function to process and calculate the equation.
 * 
 * @param {string} eqString Equation as string.
 */
export function calculate(eqString)
{
    // Mutable list to store characters from eqString.
    const charStack = [];

    // For each character in equation.
    for (let i = 0; i < eqString.length; i++)
    {
        if (eqString[i] == ')')
        {
            
        }
        else
        {
            charStack.push(eqString[i])
        }
    }
}