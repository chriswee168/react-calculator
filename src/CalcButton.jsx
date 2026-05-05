import { useRef, useState } from 'react';
import styles from "./CalcButton.module.css";
import { calculate } from './calc-funcs/calculate-eq';
/**
 * Component for calculator button.
 * 
 * @param {Object} props
 * @param {string} props.calcLabel Label for this button.
 * @param {Array<string>} props.borderRadii Indicate radius of corners.
 * @param {string} props.equationState String containing equation.
 * @param {Dispatch<SetStateAction<string>} props.updateEquation Function to update equation string.
 * @param {string} eqHistory History equation string.
 * @param {Dispatch<SetStateAction<string>} updateEqHistory Function to update equation history string.
 * @param {string} props.action What action should button do. (append, clear, calculate)
 * @returns 
 */
export function CalcButton({
    calcLabel, equationState, updateEquation, eqHistory, updateEqHistory,
    borderRadii = [0, 0, 0, 0], action = "append"
})
{
    const buttonLabel = useRef(calcLabel);
    
    // Select button function.
    let buttonFunc;
    switch (action)
    {
        case "append":
            buttonFunc = appendEquation;
            break;
        case "clear":
            buttonFunc = clearEquation;
            break;
        case "calculate":
            buttonFunc = calcEquation;
        default:
            break;
    }

    return (
        <button 
            className={styles.calcButton} 
            type="button" 
            style={{
                borderTopLeftRadius: borderRadii[0],
                borderTopRightRadius: borderRadii[1],
                borderBottomLeftRadius: borderRadii[2],
                borderBottomRightRadius: borderRadii[3]
            }}
            onClick={() => buttonFunc(calcLabel, equationState, updateEquation, eqHistory, updateEqHistory)}
            >
        {buttonLabel.current}
        </button>
    )
}

/**
 * Function to append label to equation.
 * 
 * @param {string} label Calculator label.
 * @param {string} equationState String containing equation.
 * @param {Dispatch<SetStateAction<string>} updateEquation Function to update equation string.
 */
function appendEquation(label, equationState, updateEquation, _eqHistory, _updateEqHistory)
{
    updateEquation(equationState + label);
}

/**
 * Function to clear equation.
 * 
 * @param {Dispatch<SetStateAction<string>} updateEquation Function to update equation string.
 */
function clearEquation(_label, _equationState, updateEquation, _eqHistory, _updateEqHistory)
{
    updateEquation("");
}

/**
 * Function to calculate result of equation.
 * 
 * @param {string} equationState Equation string.
 * @param {Dispatch<SetStateAction<string>} updateEquation Function to update equation string.
 * @param {string} eqHistory History equation string.
 * @param {Dispatch<SetStateAction<string>} updateEqHistory Function to update equation history string.
 */
function calcEquation(_label, equationState, updateEquation, eqHistory, updateEqHistory)
{
    calculate(equationState);
}