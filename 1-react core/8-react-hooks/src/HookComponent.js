import React, { useState, useEffect } from 'react';


// https://overreacted.io/a-complete-guide-to-useeffect/

const HookComponent = () => {

    // const arr = useState(0)
    // const count = arr[0]
    // const setCount = arr[1];

    const [count, setCount] = useState(0)
    const [tnrName, setTnrName] = useState('')

    // useEffect(() => {
    //     console.log('document title change when is new count')
    //     document.title = ` count - ${count}`
    // });

    useEffect(() => {
        console.log('document title change when is new count')
        document.title = ` count - ${count}`
    },[count]);

    

    const display = () => {
        setTimeout(() => {
            console.log(count)
        }, 3000);
    }

    return (
        <div className="alert alert-danger">
            <button onClick={e => setCount(count + 1)} className="btn btn-primary">hit</button>
            &nbsp;
            <button onClick={e => display()} className="btn btn-warning">display</button>
            <hr />
            count : {count}
            <hr />
            <button onClick={e => setTnrName("Nag")} className="btn btn-dark"> show trainer name</button>
            <hr />
            Name : {tnrName}
        </div>
    );
};

export default HookComponent;
