import { useState } from 'react'
import { CalcButton } from './CalcButton'
import styles from './CalcTable.module.css'

/**
 * Component for table containing calculator buttons.
 * 
 * @param {Object} props
 * @param {string} props.equationState String containing equation.
 * @param {Dispatch<SetStateAction<string>} props.updateEquation Function to update equation string.
 * @returns CalcTable component.
 */
export default function CalcTable({equationState, updateEquation}) {
  
  // Row labels for calculator buttons.
  const rowLabels = [
    ['1', '2', '3', '+'], 
    ['4', '5', '6', '-'], 
    ['7', '8', '9', '*'], 
    ['(', '0', ')', '/']
  ];

  return (
    <>
      <table className={styles.calcTable}>
        <tbody>
          {
            rowLabels.map((row) => (
              <tr>
                {
                  row.map((label) => (
                    <td>
                      <CalcButton 
                        calcLabel={label} 
                        borderRadii={[0, 0, 0, 0]} 
                        equationState={equationState} 
                        updateEquation={updateEquation}
                      />
                    </td>
                  ))
                }
              </tr>
            ))
          }

        </tbody>
      </table>
    </>
  )
}