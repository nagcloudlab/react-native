import React, { useState } from 'react'

function Counter() {

    // Each Render Has Its Own Props and State
    const [count, setCount] = useState(0);

    // // Each Render Has Its Own Event Handlers
    function handleAlertClick() {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={handleAlertClick}>
                Show alert
            </button>
            <hr/>
        </div>
    );
}

export default Counter;