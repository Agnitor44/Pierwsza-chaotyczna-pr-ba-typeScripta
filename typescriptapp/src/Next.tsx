import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Person from './Person'



interface Props {
  data: {phone: string, cell: string, email: string, name:{ first: string, last: string }, picture: {medium: string, large: string} }[]
 
}

const List: React.FC <Props> = ({data}) =>  {


const [list, setList] = useState([...data])
const [current, setCurrent] = useState('')
useEffect(() => {
  const dane = [...data]
  setList(dane)

}, [data])
 const handleClick = (id:any) => {
 

  const currentData: any = [...data].filter(item =>`${item.cell}${item.phone}` === id )
  setCurrent(currentData[0])
 }
let people = list.map(item => ( 
<section  onClick = {handleClick.bind(this, `${item.cell}${item.phone}`)} className = 'person'>
<img id = {`${item.cell}${item.phone}`} src = {item.picture.medium}/>
<div className = 'profileMini'>
<h1>{item.name.first} {item.name.last}</h1>
<h2>{item.email}</h2>
<h3>{item.cell}</h3>
</div>

</section>
))


const inpRef = useRef<HTMLInputElement>(null)
const handleSearch = () => {

  const now = inpRef.current?.value!
  const newList  = [...data].filter(item => `${item.name.first} ${item.name.last}`.includes(now))
  setList(newList)
 
}



  return ( 
    current 
    ?
    <Person who = {current} setWho = {setCurrent}/>
    :
  <>
    <input ref = {inpRef} onChange = {handleSearch}/>
    <div className = 'list'>
      {people}
     
    </div>
    </>
  );
};

export default List;