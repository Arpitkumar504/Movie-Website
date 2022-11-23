import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai'

const Faqbox = (props) => {
    const [data, setdata] = useState(false);
    return (
        <div className="faqcontent">
            <div className='faqbox'>
                <h5>{props.name}</h5>
                <div onClick={()=>{setdata(!data)}}>{data?<AiFillMinusCircle className='icon' />:<AiFillPlusCircle className='icon' />}</div>
            </div>
            <div className="faqans">
                {data&&<p>{props.ans}</p>}
            </div>
        </div>
    )
}

export default Faqbox
