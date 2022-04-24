import React, { useEffect, useState } from 'react'
import './List.css'

function List() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    useEffect(() => {
        if(localStorage.getItem('List')){
            const storedList = JSON.parse(localStorage.getItem('List'));
            setList(storedList);
        }
    }, [])

    const AddToList = () => {
        if(item.length == 0){
            alert("Empty field!")
            return;
        }
        setList([...list, {id: Math.random().toFixed(4) * 10000 , itemName: item, completed: false}]);
        setItem("");
        localStorage.setItem('List' , JSON.stringify([...list, {id: Math.random().toFixed(4) * 10000 , itemName: item, completed: false}]))
        console.log(list)
    }

    const RemoveFromList = (itemIndex) => {
        const deleted = list.filter((item) => item.id !== itemIndex.id);
        setList(deleted);
        localStorage.setItem('List', JSON.stringify(deleted))
    }

    const EnterKeyEvent = e => {
        if (e.keyCode === 13) {
            AddToList();
        }
    }

    const clearAll = () => {
        if(list.length == 0){
            alert('No tasks to be removed!')
        }
        else if(list.length >= 1 && window.confirm('You will delete all tasks. Are you sure?')){
            setList([])
            localStorage.removeItem('List')
        }
    }

    const HandleCheckBox = (task) => {
        setList(list.map((item) => {
            if(item.id === task.id){
                return {...item, completed: !item.completed};
            }
                return item;
            })) 
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
                       
                <button className='btn-add' onClick={AddToList}> + </button>
            </div>
            <ul className='wrapper-items'>
                {list.map((list) => 
                    <div key={list.id} style={{backgroundColor: list.completed ? '#ff000082' : ' '}}>
                        <li style={{textDecoration: list.completed ? 'line-through' : ' '}}> <input type='checkbox' onChange={() => HandleCheckBox(list)}></input> {list.itemName} </li>
                        <button className='btn-remove' onClick={() => RemoveFromList(list)}> x </button>
                    </div>
                )}
            </ul>
            <button onClick={clearAll} className="btnClearAll" title='Clear All'> <i className="fa-solid fa-trash-can"></i> </button>
        </div>
    )
}

export default List