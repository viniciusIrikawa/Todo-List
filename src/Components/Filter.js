import React, { useState } from 'react'
import List from './List';
import './Filter.css'

export const Filter = ({list, setList}) => {

    // const [filterChecked, setFilterChecked] = useState();

    const filterCompleted = (e) => {
        if(e.target.checked){
            setList(list.filter(item => {
                if(item.completed){
                    return item
                }
            }))
        }else{
            const allItems = JSON.parse(localStorage.getItem('List'));
            setList(allItems);
        }
    }

  return (
    <div className='wrapper-filter' style={{opacity: list.find(el => el.completed) ?  '1' : '0' }}>
        <input type='checkbox' name='checkbox' id='checkbox' onChange={(e) => filterCompleted(e)}></input> 
        <label htmlFor="checkbox"> Filter </label>
     </div>
  )

}
