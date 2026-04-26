import { useState } from 'react'
import './App.css'
import CalcTable from './CalcTable'
import { EquationWindow } from './EquationWindow';

export default function App() {

  // Main equation string.
  const [equation, updateEquation] = useState("");

  return (
    <>
      <EquationWindow equationState={equation} borderRadii={[10, 10, 10, 10]}/>
      <CalcTable equationState={equation} updateEquation={updateEquation}/>
    </>
  )
}