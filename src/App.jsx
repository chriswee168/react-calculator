import { useState } from 'react'
import styles from './App.module.css'
import CalcTable from './CalcTable'
import { EquationWindow } from './EquationWindow';

export default function App() {

  // Main equation string.
  const [equation, updateEquation] = useState("");

  return (
    <div className={styles.appWrapper}>
      <EquationWindow equationState={equation} borderRadii={[20, 20, 0, 0]}/>
      <CalcTable equationState={equation} updateEquation={updateEquation}/>
    </div>
  )
}