import React, {useState, useEffect} from 'react';
import './App.css';
import List from './Next';

const App: React.FC  = () =>  {
  const [data, setData] = useState([])
useEffect(() => {
  fetch('https://randomuser.me/api/?results=100').
  then(data => data.json()).
  then(data => setData(data.results))
}, [])
  
  return (
    <div className="App">
     <List data = {data}/>
    </div>
  );
};

export default App;
