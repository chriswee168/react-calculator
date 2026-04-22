import { useRef, useState } from 'react';
import styles from "./CalcButton.module.css";
/**
 * Component for calculator button.
 * 
 * @param {Object} props
 * @param {string} props.calcLabel Label for this button.
 * @param {number} props.posY Button Y position.
 * @param {number} props.posX Button X position.
 * @param {string} props.equationState String containing equation.
 * @param {Dispatch<SetStateAction<string>} props.updateEquation Function to update equation string.
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