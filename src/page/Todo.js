import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import Todolist from '../component/Todolist.js';

const Todo = () => {
    const [data, setdata] = useState("");
    const [items, setitems] = useState([]);
    let [check, setcheck] = useState(0);
    const inputdata = (event) => {
        setdata(event.target.value);
    }
    const listofitems = () => {
        if (data !== "") {
            setitems([...items, data]);
            check++;
            setcheck(check);
        }
        setdata("");
    }
    const deleteitems = (id) => {
        const update = items.filter((datas, index) => {
            return index !== id;
        })
        setitems(update);
        check--;
        setcheck(check);
    }
    return (
        <div className="container" style={{ height: "600px" }}>
            <div className="todo">
                <h1>Todo App</h1>
                <div className="inputbox">
                    <input type="text" value={data} placeholder='Add a Items' onChange={(e) => { inputdata(e) }} />
                    <button type='button' onClick={listofitems}><AiFillPlusCircle /></button>
                </div>
                <div className="todolist">
                    {check === 0 ? <p>Please Enter Data</p> :
                        items.map((element, index) => {
                            return (
                                <Todolist
                                    name={element}
                                    key={index}
                                    id={index}
                                    onSelect={deleteitems}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo
