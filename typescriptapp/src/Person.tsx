import React, {useState, useEffect} from 'react';
import './App.css';
import List from './Next';

interface Props {
    who:  any,  // TypeScript: *Został stworzony, aby kod był lepszy i żeby było mniej błędów*,
                //Ja: a...N.....y
    setWho: Function
}
const Person: React.FC <Props>  = ({who, setWho}) =>  {


  
  return (
        <div className = 'profilePlus'>
        <img className = 'personClose' src = {who.picture.large}/>
        <div className = 'profileMini'>
<h1>{who.name.first} {who.name.last}</h1>
<h2>{who.email}</h2>
<h3>{who.cell}</h3>
<h4>{who.location.city}</h4>
<h4>{who.dob.age}</h4>
</div>
<button onClick = {() => setWho('')}>Back</button>
        </div>
  );
};

export default Person;
