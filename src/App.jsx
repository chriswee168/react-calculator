import { useState } from 'react'
import appStyles from './App.module.css'
import CalcTable from './CalcTable'
import { EquationWindow } from './EquationWindow';
import equationStyles from "./EquationWindow.module.css";

export default function App() {

  // Main equation string.
  const [equation, updateEquation] = useState("");

  return (
    <div className={appStyles.appWrapper}>
      <EquationWindow 
        equationState={equation} 
        outerStyle={equationStyles.outer} 
        innerStyle={equationStyles.inner} 
        borderRadii={[20, 20, 0, 0]}
      />
      <CalcTable equationState={equation} updateEquation={updateEquation}/>
    </div>
  )
}