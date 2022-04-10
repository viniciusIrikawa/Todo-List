import React from 'react'
import './List.css'

function List() {
  return (
    <div className='card'>
        <h1> My list </h1>
        <div className='wrapper-ipt'>
            <input type="text" placeholder='Type...' className='ipt-box'/>
            <button className='btn-add'> + </button>
        </div>
    </div>
  )
}

export default List