import React,{useMemo, useState, useCallback} from 'react';
import {useFetch} from './hooks/useFetch'
// import {Hello} from './hello.component'
// import { Square } from './square.component';

const App = ()=>{
  const [count, setCount] = useState(0);
  const {data} = useFetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json')

  const computeLongestWord = useCallback((arr) =>{
    if (!arr){
      return []
    }
    console.log('computing longest word...')
    let longestWord = ''
    JSON.parse(arr).forEach(sentence=>sentence.split(' ').forEach(word =>{
      if (word.length > longestWord.length){
        longestWord = word
      }
    }))
    return longestWord
  },[]);

  const longestWord = useMemo(()=>
    computeLongestWord(data),[data,computeLongestWord]
  )
  // const favoriteNums = [7,21,37]

  // const increment = useCallback(n=>{
  //   setCount(c=>c+n)
  // },[setCount])

  return(
    <div>
      {/* <Hello increment={increment}/> */}
      <div>count: {count}</div>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <div>{longestWord}</div>
      {/* {favoriteNums.map(n =>{
        return(
          <Square increment={increment} n={n} key={n}/>
        )
      })} */}
    </div>
  )
}

export default App;
