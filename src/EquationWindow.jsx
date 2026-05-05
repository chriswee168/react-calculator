import { useRef, useState } from 'react';
/**
 * Component for window to display current equation.
 *
 * @param {Object} props
 * @param {string} props.equationState String containing equation.
 * @param {Object<string, string>} probs.outerStyle Styles for outer window.
 * @param {Object<string, string>} probs.innerStyle Styles for inner text.
 * @param {Array<string>} props.borderRadii Indicate radius of corners.
 * @returns
 */
export function EquationWindow({
    equationState, outerStyle, innerStyle, borderRadii = [0, 0, 0, 0]
})
{
    return (
        <div
            className={outerStyle}
            style={{
                borderTopLeftRadius: borderRadii[0],
                borderTopRightRadius: borderRadii[1],
                borderBottomLeftRadius: borderRadii[2],
                borderBottomRightRadius: borderRadii[3]
            }}
            >
            <p className={innerStyle}>{equationState}</p>
        </div>
    )
}