import { useState } from 'react'
import { CalcButton } from './CalcButton'
import styles from './CalcTable.module.css'

/**
 * Component for table containing calculator buttons.
 * 
 * @param {Object} props
 * @param {string} props.equationState String containing equation.
 * @param {Dispatch<SetStateAction<string>} props.updateEquation Function to update equation string.
 * @param {string} eqHistory History equation string.
 * @param {Dispatch<SetStateAction<string>} updateEqHistory Function to update equation history string.
 * @returns CalcTable component.
 */
export default function CalcTable({equationState, updateEquation, eqHistory, updateEqHistory}) {
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

      <table className={styles.actionTable}>
        <tbody>
          <tr>
            <td><CalcButton 
              calcLabel="CE" borderRadii={[0, 0, 20, 0]} 
              equationState={equationState} updateEquation={updateEquation} 
              eqHistory={eqHistory} updateEqHistory={updateEqHistory} 
              action='clear'/></td>
            <td><CalcButton 
              calcLabel="=" borderRadii={[0, 0, 0, 20]} 
              equationState={equationState} updateEquation={updateEquation} 
              eqHistory={eqHistory} updateEqHistory={updateEqHistory} 
              action='calculate'/>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}