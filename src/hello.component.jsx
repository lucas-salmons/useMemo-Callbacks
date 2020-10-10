import React from 'react'
// import { useCountRenders } from './hooks/useCountRenders'

export const Hello = React.memo(({increment}) =>{
    // useCountRenders()
    return <button onClick={()=>increment(5)}>hello</button>
})