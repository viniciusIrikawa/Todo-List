import React, { useState } from 'react'
import './List.css'

function List() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const AddToList = () => {
        if(item.length == 0){
            alert("Campo vazio!")
            return;
        }
        setList([...list, item]);
        setItem("");
    }

    const RemoveFromList = (itemIndex) => {
        const newArray = [...list];
        newArray.splice(itemIndex, 1);
        setList(newArray)
    }
    const EnterKeyEvent = e => {
        if (e.keyCode === 13) {
            AddToList();
        }
    }

    const clearAll = () => {
        setList([])
    }
    return (
        <div className='card'>
            <h1> My list </h1>
            <span className='counterItems'> {list.length} </span>
            <div className='wrapper-ipt'>
                <input type="text" 
                       value={item}
                       placeholder='Type...' 
                       className='ipt-box'
                       maxLength={50}
                       onKeyDown={EnterKeyEvent} 
                       onChange={e => setItem(e.target.value)}/>
                       
                <button className='btn-add' onClick={() => AddToList()}> + </button>
            </div>
            <ul className='wrapper-items'>
                {list.map((list, index) => 
                    <div key={index}>
                        <li> {list} </li>
                        <button className='btn-remove' onClick={() => RemoveFromList(index)}> x </button>
                    </div>
                )}
            </ul>
            <button onClick={clearAll} className="btnClearAll" title='Clear All'> <i class="fa-solid fa-trash-can"></i> </button>
        </div>
    )
}

export default List