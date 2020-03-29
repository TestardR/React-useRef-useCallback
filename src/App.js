import React, { useRef, useState, useEffect, useCallback } from 'react';

function App() {
  const renders = useRef(0);
  console.log('hello renders: ', renders.current++);
  // const inputRef = useRef(null);
  const [inputRef, setInputRef] = useState(null);
  const [count, setCount] = useState(0);
  const counterRef = useRef(0);

  const setRef = useCallback(node => {
    setInputRef(node);
  }, []);

  // const setRef = node => {
  //   setInputRef(node)
  // }

  useEffect(() => {
    if (!inputRef) {
      return;
    }

    function focusInput() {
      console.log('I have focused the input with DOM value :', inputRef);
    }

    inputRef.addEventListener('focus', focusInput);
    inputRef.focus();

    return () => {
      inputRef.removeEventListener('focus', focusInput);
    };
  }, [inputRef]);

  function incrementCounterRef() {
    counterRef.current += 1;
  }

  return (
    <div>
      <p>State count: {count}</p>
      <input ref={setRef} placeholder="Click me Banana" />
      <button
        type="button"
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        Increment
      </button>

      <p>Ref Count: {counterRef.current}</p>
      <button type="button" onClick={incrementCounterRef}>
        Increment Ref Count
      </button>
    </div>
  );
}

export default App;
