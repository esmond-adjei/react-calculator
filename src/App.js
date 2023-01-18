import Screen from './components/Screen'
import NumberPad from './components/NumberPad'
import {operators, configurations, numberKeys} from './logic/logic.js'

import React, {useState} from 'react'

function App() {
  const [expression,setExpression] = useState('')
  const [answer,setAnswer] = useState('answer')


  return (
    <div className="App">
      <header className="App-header">
        <Screen expression={expression} 
                setExpression={setExpression}
                answer={answer}
                setAnswer={setAnswer}/>
      </header>
      
      <main className="keyPads">
        <div>

        <NumberPad keyValues={configurations} 
                  expression={expression}
                  setExpression={setExpression}
                  answer={answer}
                  setAnswer={setAnswer}
                  styles={{height: "4rem"}} 
                  childrenStyles={{backgroundColor: "#156c41"}}/>

        <NumberPad keyValues={numberKeys}
                   expression={expression}
                   answer={answer}
                   setAnswer={setAnswer}
                   setExpression={setExpression}/>

        </div>
        <NumberPad keyValues={operators} 
                   setExpression={setExpression}
                   answer={answer}
                   setAnswer={setAnswer}
                   expression={expression}
                   styles={{width:"4rem"}} 
                   childrenStyles={{backgroundColor:"#b35711"}}/>
      </main>
    </div>
  );
}

export default App;
