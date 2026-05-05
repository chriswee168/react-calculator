import { useState } from 'react'
import appStyles from './App.module.css'
import CalcTable from './CalcTable'
import { EquationWindow } from './EquationWindow';
import equationStyles from "./EquationWindow.module.css";

export default function App() {

  // Main equation string.
  const [equation, updateEquation] = useState("");
  const [eqHistory, updateEqHistory] = useState("");

  return (
    <div className={appStyles.appWrapper}>
      <EquationWindow 
        equationState={eqHistory}
        outerStyle={equationStyles.outerHistory}
        innerStyle={equationStyles.innerHistory}
        borderRadii={[20, 20, 0, 0]}
      />
      <EquationWindow 
        equationState={equation} 
        outerStyle={equationStyles.outerMain} 
        innerStyle={equationStyles.innerMain} 
        borderRadii={[20, 20, 0, 0]}
      />
      <CalcTable 
        equationState={equation} updateEquation={updateEquation} 
        eqHistory={eqHistory} updateEqHistory={updateEqHistory}
      />
    </div>
  )
}