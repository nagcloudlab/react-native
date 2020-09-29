import React, { useState, useEffect } from 'react'

function GreetingWithCounter({ name }) {

    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log("effect on new name prop")
    //     document.title = 'Hello, ' + name;
    // });

    useEffect(() => {
        console.log("effect on new name prop")
        document.title = 'Hello, ' + name;
    }, [name]); // Our deps

    return (
        <div>
            Hello, {name}
            <hr />
            <p>You clicked {count} times</p>
            <hr />
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default GreetingWithCounter;