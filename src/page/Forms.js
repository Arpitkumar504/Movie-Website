import React, { useState } from 'react'


const Forms = () => {
    const [fullname, setfullname] = useState({
        fname: "",
        lname: "",
    });
    const [arraydata, setdata] = useState([]);

    const submitform = (e) => {
        e.preventDefault();
        if (fullname.fname !== "" && fullname.lname !== "") {
            const alldata = { firstname: fullname.fname, lastname: fullname.lname };
            setdata([...arraydata, alldata]);

            // cleanup forms after submitting data
            setfullname({
                fname: '',
                lname: '',
            });
            console.log(alldata);
            console.log(arraydata);
        }
        else {
            alert("not submitted");
        }
    }

    const inputevent = (event) => {
        const { name, value } = event.target;
        setfullname({ ...fullname, [name]: value });
    }

    return (
        <div className='container'>
            <form action="" onSubmit={submitform}>
                <div className="pracforms">
                    <h1>{fullname.fname} {fullname.lname}</h1>
                    <input
                        type="text"
                        className='inputs'
                        autoComplete='off'
                        placeholder='Enter name'
                        name='fname'
                        value={fullname.fname}
                        onInput={inputevent}
                    />
                    <input
                        type="text"
                        className='inputs'
                        autoComplete='off'
                        name='lname'
                        placeholder='Enter last name'
                        value={fullname.lname}
                        onChange={inputevent}
                    />
                    <button type='submit' className='formbtn'>submit</button>
                </div>
            </form>

        </div>

    )
}

export default Forms
