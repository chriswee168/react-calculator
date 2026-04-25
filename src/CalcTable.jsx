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
            <td><CalcButton calcLabel="1" borderRadii={[20, 0, 0, 0]}/></td>
            <td><CalcButton calcLabel="2"/></td>
            <td><CalcButton calcLabel="3"/></td>
            <td><CalcButton calcLabel="+" borderRadii={[0, 20, 0, 0]}/></td>
          </tr>
          <tr>
            <td><CalcButton calcLabel="4"/></td>
            <td><CalcButton calcLabel="5"/></td>
            <td><CalcButton calcLabel="6"/></td>
            <td><CalcButton calcLabel="-"/></td>
          </tr>
          <tr>
            <td><CalcButton calcLabel="7"/></td>
            <td><CalcButton calcLabel="8"/></td>
            <td><CalcButton calcLabel="9"/></td>
            <td><CalcButton calcLabel="*"/></td>
          </tr>
          <tr>
            <td><CalcButton calcLabel="(" borderRadii={[0, 0, 20, 0]}/></td>
            <td><CalcButton calcLabel="0"/></td>
            <td><CalcButton calcLabel=")"/></td>
            <td><CalcButton calcLabel="/" borderRadii={[0, 0, 0, 20]}/></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}