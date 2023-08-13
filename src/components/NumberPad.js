import Key from "./Keys";

function NumberPad({keyValues,styles, childrenStyles, setExpression, expression, answer,setAnswer}) {

    return ( 
        <div className="numberPad" style={styles}>
            {keyValues.map(k => 
                <Key key={k} 
                keyValue={k} 
                styles={childrenStyles}
                setExpression={setExpression} 
                expression={expression} 
                answer={answer}
                setAnswer={setAnswer}
                />
            )}
        </div>
     );
}

export default NumberPad;
