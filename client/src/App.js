import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';


const Test = () => {
  const [answer, setAnwser] = useState();

  const getAnswer = async () => {
    const res = await fetch("/api");
    const answer = await res.json();
    setAnwser(answer);
  };

  useEffect(() => {
    getAnswer();
  }, []);

  return <div>{ JSON.stringify(answer) }</div>
}

function App() {
  return (
    <div className="App">
      <p>alkjsjdjaksjd</p>
      <Test />
    </div>
  );
}

export default App;
