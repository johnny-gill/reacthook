import { useState } from 'react';

const heavyWork = () => {
  console.log('엄청 무거운 작업');
  return ['test'];
};

function App() {
  const [names, setNames] = useState(heavyWork);
  const [input, setInput] = useState('');

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const uploadClickHandler = () => {
    setNames([input, ...names]);
  };

  return (
    <div>
      <input type="text" onChange={inputChangeHandler} />
      <button onClick={uploadClickHandler}>UPLOAD</button>
      {names.map((name, idx) => (
        <p key={idx}>{name}</p>
      ))}
    </div>
  );
}

export default App;
