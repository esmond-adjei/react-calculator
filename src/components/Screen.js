function Screen({expression, setExpression, answer, setAnswer}) {

    const styles = {
        tailScreen : "flex flex-col p-7",
        tailDisplayExpress : "min-h-5 bg-gray-200 text-3xl p-2 text-gray-600 text-right outline-none focus:outline-0",
        tailDisplayAnswer : " text-gray-500",
    }

    return ( 
        <div className={`screen ${styles.tailScreen}`}>

            <input className={`display--expression ${styles.tailDisplayExpress}`} 
                    type="text" 
                    value={expression}
                    onChange={e => setExpression(e.target.value)}
                />
            <input className={`display--answer ${styles.tailDisplayExpress + styles.tailDisplayAnswer}`}
                 value={answer}
                 readOnly />
        </div>
     );
}

export default Screen;