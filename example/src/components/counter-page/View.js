import React, {useState} from 'react';

export default function View(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div>My app is called {props.appName}
      <input type="submit" value="increment" onClick={() => {
        setCounter((counter) => props.calculateNewValue('add')(counter))
      }}/>
      <input type="submit" value="reduce" onClick={() => {
        setCounter((counter) => props.calculateNewValue('substract')(counter))
      }}/>
      <div>Counter value {counter}</div>
    </div>
  )
}
