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
    ['1', '2', '3'], 
    ['4', '5', '6'], 
    ['7', '8', '9'], 
  ];

  return (
    <>
      <table className={styles.calcTable}>
        <tbody>
          <tr>
            <td><CalcButton calcLabel="1" equationState={equationState} updateEquation={updateEquation}/></td>
            <td><CalcButton calcLabel="2" equationState={equationState} updateEquation={updateEquation} /></td>
            <td><CalcButton calcLabel="3" equationState={equationState} updateEquation={updateEquation} /></td>
            <td><CalcButton calcLabel="+" equationState={equationState} updateEquation={updateEquation} /></td>
          </tr>
          <tr>
            <td><CalcButton calcLabel="4" equationState={equationState} updateEquation={updateEquation} /></td>
            <td><CalcButton calcLabel="5" equationState={equationState} updateEquation={updateEquation} /></td>
            <td><CalcButton calcLabel="6" equationState={equationState} updateEquation={updateEquation} /></td>
            <td><CalcButton calcLabel="-" equationState={equationState} updateEquation={updateEquation} /></td>
          </tr>
          <tr>
            <td><CalcButton calcLabel="7" equationState={equationState} updateEquation={updateEquation} /></td>
            <td><CalcButton calcLabel="8" equationState={equationState} updateEquation={updateEquation} /></td>
            <td><CalcButton calcLabel="9" equationState={equationState} updateEquation={updateEquation} /></td>
            <td><CalcButton calcLabel="*" equationState={equationState} updateEquation={updateEquation} /></td>
          </tr>
          <tr>
            <td><CalcButton calcLabel="(" equationState={equationState} updateEquation={updateEquation} /></td>
            <td><CalcButton calcLabel="0" equationState={equationState} updateEquation={updateEquation} /></td>
            <td><CalcButton calcLabel=")" equationState={equationState} updateEquation={updateEquation} /></td>
            <td><CalcButton calcLabel="/" equationState={equationState} updateEquation={updateEquation} /></td>
          </tr>
        </tbody>
      </table>

      <table className={styles.actionTable}>
        <tbody>
          <tr>
            <td><CalcButton calcLabel="CE" borderRadii={[0, 0, 20, 0]} equationState={equationState} updateEquation={updateEquation} action='clear'/></td>
            <td><CalcButton 
              calcLabel="=" 
              borderRadii={[0, 0, 0, 20]} 
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