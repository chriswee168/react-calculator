import { useState } from 'react'
import './App.css'
import { CalcButton } from './CalcButton'
import CalcTable from './CalcTable'

export default function App() {

  // Main equation string.
  const [equation, updateEquation] = useState("");

  return (
    <>
      <CalcTable equationState={equation} updateEquation={updateEquation}/>
    </>
  )
}