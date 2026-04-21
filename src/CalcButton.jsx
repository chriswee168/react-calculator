import { useRef, useState } from 'react';
import styles from "./CalcButton.module.css";
/**
 * Component for calculator button.
 * 
 * @param {string} calcLabel Label for this button.
 * @param {number} posY Button Y position.
 * @param {number} posX Button X position.
 * @param {string} equationState String containing equation.
 * @param {Dispatch<SetStateAction<string>} updateEquation Function to update equation string.
 * @returns 
 */
export function CalcButton({calcLabel, posY, posX, equationState, updateEquation})
{
    const buttonLabel = useRef(calcLabel);
    return (
        <button 
            className={styles.calcButton} 
            type="button" 
            style={{top: posY, left: posX}}>
        {buttonLabel.current}
        </button>
    )
}