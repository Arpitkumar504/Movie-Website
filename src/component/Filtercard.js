import React, { useState } from 'react'
import Card from './Card.js';
import data from './carddata.js';
import { SiPrime, SiNetflix } from 'react-icons/si';
import { FaSearch } from 'react-icons/fa';

const Filtercard = () => {
    const [items, setitem] = useState(data);
    const filterfun = (datas) => {
        if (datas === "all") {
            setitem(data);
        }
        else {
            const updatedata = data.filter(element => {
                return element.plat === datas;
            })
            setitem(updatedata);
        }
    }
    const filtersrch = (searchdata) => {
        if ("all".includes(searchdata.toLowerCase())) {
            setitem(data);
        }
        else {
            const update = data.filter(element => {
                return element.name.toLowerCase().includes(searchdata.toLowerCase());
            })
            setitem(update);
        }
    }
    return (
        <div className='container my-5'>
            <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "30px" }}>Our Movie Collection</h1>
            <div className="inputbox">
                <input type="text" onInput={(e) => { filtersrch(e.currentTarget.value.trim()) }} />
                <FaSearch className='searchicons' />
            </div>
            <div className="filterbuttons">
                <button type='button' className='login' onClick={() => filterfun("all")}>All</button>
                <button type='button' className='login' onClick={() => filterfun("Netflix")}><SiNetflix /> Netflix</button>
                <button type='button' className='login' onClick={() => filterfun("Amazon")}><SiPrime /> Amazon</button>
            </div>
            <div className="filtercarddata">
                {
                    items.map(element => {
                        return (
                            <Card
                                name={element.name}
                                plat={element.plat}
                                image={element.image}
                                link={element.link}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Filtercard
