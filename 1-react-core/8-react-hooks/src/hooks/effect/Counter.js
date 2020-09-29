import React, { useState, useEffect, useRef } from 'react'

function Counter() {

    const [count, setCount] = useState(0);
    // const latestCount = useRef(count);

    // Each Render Has Its Own Effects
    useEffect(() => {

        document.title = `You clicked ${count} times`;
        // latestCount.current = count;

        // setTimeout(() => {
        //     console.log(`You clicked ${count} times`);
        //     // console.log(`You clicked ${latestCount.current} times`);
        // }, 3000);

        // return () => {
        //     console.log('clean up')
        // }

    });


    // useEffect(() => {
    //     console.log("subscription...")
    //     return () => {
    //         console.log("unsubscription...")
    //     }
    // }, [])


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Counter;



/*


To make sure we have a solid understanding, let’s recap our first render:

React: Give me the UI when the state is 0.
Your component:

Here’s the render result: <p>You clicked 0 times</p>.
Also remember to run this effect after you’re done: () => { document.title = 'You clicked 0 times' }.
React: Sure. Updating the UI. Hey browser, I’m adding some stuff to the DOM.
Browser: Cool, I painted it to the screen.
React: OK, now I’m going to run the effect you gave me.

Running () => { document.title = 'You clicked 0 times' }.


*/





/*



Now let’s recap what happens after we click:

Your component: Hey React, set my state to 1.
React: Give me the UI for when the state is 1.
Your component:

Here’s the render result: <p>You clicked 1 times</p>.
Also remember to run this effect after you’re done: () => { document.title = 'You clicked 1 times' }.
React: Sure. Updating the UI. Hey browser, I’ve changed the DOM.
Browser: Cool, I painted your changes to the screen.
React: OK, now I’ll run the effect that belongs to the render I just did.

Running () => { document.title = 'You clicked 1 times' }.


*/



// Each Render Has Its Own… Everything




