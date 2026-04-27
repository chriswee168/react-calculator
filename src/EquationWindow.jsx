import { useRef, useState } from 'react';
import styles from "./EquationWindow.module.css";
/**
 * Component for window to display current equation.
 *
 * @param {Object} props
 * @param {string} props.equationState String containing equation.
 * @param {Array<string>} props.borderRadii Indicate radius of corners.
 * @returns
 */
export function EquationWindow({
    equationState, borderRadii = [0, 0, 0, 0]
})
{
    return (
        <div
            className={styles.outer}
            style={{
                borderTopLeftRadius: borderRadii[0],
                borderTopRightRadius: borderRadii[1],
                borderBottomLeftRadius: borderRadii[2],
                borderBottomRightRadius: borderRadii[3]
            }}
            >
            <p className={styles.inner}>{equationState}</p>
        </div>
    )
}