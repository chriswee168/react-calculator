import { useState } from 'react'
import appStyles from './App.module.css'
import CalcTable from './CalcTable'
import { EquationWindow } from './EquationWindow';
import equationStyles from "./EquationWindow.module.css";

/**
 * Main App component to store equation window, state and calculator table.
 * 
 * @returns App component.
 */
export default function App() {

  // Main equation string.
  const [equation, updateEquation] = useState("");
  const [eqHistory, updateEqHistory] = useState("");

  return (
    <div className={appStyles.appWrapper}>
      {/* Window to store the equation text when equals button is pressed. */}
      <EquationWindow 
        equationState={eqHistory}
        outerStyle={equationStyles.outerHistory}
        innerStyle={equationStyles.innerHistory}
        borderRadii={[20, 20, 0, 0]}
      />
      {/* Window to display the equation text itself. */}
      <EquationWindow 
        equationState={equation} 
        outerStyle={equationStyles.outerMain} 
        innerStyle={equationStyles.innerMain} 
        borderRadii={[20, 20, 0, 0]}
      />
      {/* Display all the calculator buttons. */}
      <CalcTable 
        equationState={equation} updateEquation={updateEquation} 
        updateEqHistory={updateEqHistory}
      />
    </div>
  )
}