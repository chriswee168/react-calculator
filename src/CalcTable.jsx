import { useState } from 'react'
import { CalcButton } from './CalcButton'
import styles from './CalcTable.module.css'

/**
 * Component for table containing calculator buttons.
 * 
 * @returns CalcTable component.
 */
export default function CalcTable() {
  return (
    <>
      <table className={styles.calcTable}>
        <tbody>
          <tr>
            <td><CalcButton calcLabel="1" borderRadii={[0, 0, 0, 0]}/></td>
            <td><CalcButton calcLabel="2" borderRadii={[0, 0, 0, 0]}/></td>
            <td><CalcButton calcLabel="3" borderRadii={[0, 0, 0, 0]}/></td>
          </tr>
          <tr>
            <td><CalcButton calcLabel="4" borderRadii={[0, 0, 0, 0]}/></td>
            <td><CalcButton calcLabel="5" borderRadii={[0, 0, 0, 0]}/></td>
            <td><CalcButton calcLabel="6" borderRadii={[0, 0, 0, 0]}/></td>
          </tr>
          <tr>
            <td><CalcButton calcLabel="7" borderRadii={[0, 0, 0, 0]}/></td>
            <td><CalcButton calcLabel="8" borderRadii={[0, 0, 0, 0]}/></td>
            <td><CalcButton calcLabel="9" borderRadii={[0, 0, 0, 0]}/></td>
          </tr>
          <tr>
            <td />
            <td><CalcButton calcLabel="0" borderRadii={[0, 0, 0, 0]}/></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}