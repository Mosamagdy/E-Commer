import React, { Children, createContext, useState } from 'react'

export let CounterContext = createContext()
export default function CounterContextx(props) {
    let [Count, setCount] = useState(0);
    function incr() {
        setCount(Count + 1);
    }
    function decr() {
        setCount(Count - 1);
    }
    console.log(props);

    return (
        <CounterContext.Provider value={{ Count, incr, decr }}>
            {props.children
            }
        </CounterContext.Provider>
    )
}
