import { useState } from 'react'
import './App.css'
import { CalcButton } from './CalcButton'

export default function App() {
  return (
    <>
      <table id="calc-button-table">
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
      </table>
    </>
  )
}