import React from 'react'
import { AiFillMinusCircle } from 'react-icons/ai';

const Todolist = (props) => {
    return (
        <div>
            <ul className='list'>
                <li>{props.name}</li>
                <AiFillMinusCircle className='icon' onClick={() => {
                    props.onSelect(props.id)
                }} />
            </ul>
        </div>
    )
}

export default Todolist
