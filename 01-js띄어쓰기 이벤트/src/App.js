import React, { useEffect, useState } from 'react';

const App = () => {
  let [_n,_changeN] = useState(0)
  let fnfoo = () => {
    let n = _n
    n ++
    _changeN(n)
  }

return (
  <>
    <h1 className='h1'>리액트첫수업</h1>
    <hr />
    <button onClick={fnfoo}>버튼</button>
    <hr />
    <p>{_n}</p>
  </>
);
};

export default App;