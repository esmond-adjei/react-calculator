import { calculateExpression } from '../logic/expressionEval';

function Key({keyValue, styles, expression, setExpression, answer, setAnswer}) {

    const tailstyles = {
        tailKeyButton : "bg-gray-900 text-gray-300 text-center rounded-lg p-2 m-1 w-14 h-14"
    }
  
    const handleCreateExpression = ()=>{
       
        let newExpression = ''
        // let newAnswer = '0'
        switch(keyValue){
            case "AC":
                // newAnswer = 'cleared!'
                break
            case "Del":
                newExpression = expression
                newExpression = newExpression.slice(0,-1) 
                break
            case "=":
                console.log(expression, '= ', calculateExpression(expression))
                newExpression = `Evaluate: ${calculateExpression(expression)}`
                // newAnswer = ''
                break
            default:
                newExpression = expression + keyValue
                // newAnswer = `real time evaluation: ${newExpression}`
            }
        setExpression(newExpression)
        setAnswer(`real time evaluation: ${newExpression}`)
    }

    return ( 
        <button className={`key--button ${tailstyles.tailKeyButton}`} 
                style={styles}
                onClick={handleCreateExpression}
            >
            {keyValue}
        </button>
     );
}

export default Key;