import React, { useEffect, useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import Todolist from '../component/Todolist.js';

const getlocalstorage = () => {
    let lists = localStorage.getItem('list');
    if (lists) {
        return JSON.parse(localStorage.getItem('list'));
    }
    else {
        return [];
    }
}
const getlocalcheck = () => {
    let datas = localStorage.getItem('data');
    if (datas) {
        return JSON.parse(localStorage.getItem('data'));
    }
    else {
        return 0;
    }
}
const Todo = () => {
    const [data, setdata] = useState("");
    const [items, setitems] = useState(getlocalstorage());
    let [check, setcheck] = useState(getlocalcheck());
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
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(items));
    }, [items])

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(check));
    }, [check])
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
