import { useRef, useState } from 'react';
import styles from "./CalcButton.module.css";
/**
 * Component for calculator button.
 * 
 * @param {Object} props
 * @param {string} props.calcLabel Label for this button.
 * @param {Array<string>} props.borderRadii Indicate radius of corners.
 * @param {string} props.equationState String containing equation.
 * @param {Dispatch<SetStateAction<string>} props.updateEquation Function to update equation string.
 * @returns 
 */
export function CalcButton({calcLabel, borderRadii, equationState, updateEquation})
{
    const buttonLabel = useRef(calcLabel);
    return (
        <button 
            className={styles.calcButton} 
            type="button" 
            style={{
                borderTopLeftRadius: borderRadii[0],
                borderTopRightRadius: borderRadii[1],
                borderBottomLeftRadius: borderRadii[2],
                borderBottomRightRadius: borderRadii[3]
            }}>
        {buttonLabel.current}
        </button>
    )
}