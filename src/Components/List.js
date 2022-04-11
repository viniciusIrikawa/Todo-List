import React, { useState } from 'react'
import './List.css'

function List() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const AddToList = () => {
        setList([...list, item]);
        setItem("");
    }

    const RemoveFromList = (itemIndex) => {
        const newArray = [...list];
        newArray.splice(itemIndex, 1);
        setList(newArray)
    }
    
    return (
        <div className='card'>
            <h1> My list </h1>
            <div className='wrapper-ipt'>
                <input type="text" 
                       value={item}
                       placeholder='Type...' 
                       className='ipt-box' 
                       onChange={e => setItem(e.target.value)}/>
                       
                <button className='btn-add' onClick={() => AddToList()}> + </button>
            </div>
            <div className='wrapper-items'>
                <ul>
                    {list.map((list, index) => 
                        <>
                            <li key={index}> {list} </li>
                            <button onClick={() => RemoveFromList(index)}> - </button>
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default List