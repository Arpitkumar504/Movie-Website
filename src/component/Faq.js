import React from 'react'
import faqdata from './faqdata.js';
import Faqbox from './Faqbox.js'
const Faq = () => {
    return (
        <div className='container'>
            <div className="faq">
                <h1>Frequently Asked Ques</h1>
                <div className="content">
                    {
                        faqdata.map((element) => {
                            return (
                                <Faqbox
                                    key={element.id}
                                    name={element.ques}
                                    ans={element.ans}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq
