import React, { useState } from 'react'


const Practice = () => {
    let [data, setvalue] = useState(0);
    let inc = () => {
        setvalue(data+1);
    }
    let dec=()=>{
        if(data>1){
            setvalue(data-1);
        }
        else{
            setvalue(0);        
        }
    }

    let newtime = new Date().toLocaleTimeString();
    const [ctime, settime] = useState(newtime);
    const updatetime = () => {
        newtime = new Date().toLocaleTimeString();
        settime(newtime);
    }

    let times = new Date().toLocaleTimeString();
    let [time, settimes] = useState(times);
    const updtime = () => {
        times = new Date().toLocaleTimeString();
        settimes(times);
    }
    setInterval(updtime, 1000);
    return (
        <div className="container">
            <div className="pracbox">
                <div className="headingbox">
                    <h1>{data}</h1>
                </div>
                <button type="button" className='login pracbtn' onClick={inc}>Increase</button>
                <button type="button" className='login pracbtn mt-2' onClick={dec}>Decrese</button>
            </div>
            <div className="pracbox">
                <h1>{ctime}</h1>
                <button type='button' className='login pracbtn mt-3' onClick={updatetime}>Time</button>
            </div>
            <div className="pracbox mb-4">
                <h1>{time}</h1>
            </div>
        </div>
    )
}

export default Practice
