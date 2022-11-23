import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.link} className="link"><div className="card">
        <div className="image">
          <img src={props.image} />
        </div>
        <div className="cardcontent">
          <h5 className="name">{props.name}</h5>
          <p className="plat">{props.plat}</p>
        </div>
      </div></a>
    </div>
  )
}

export default Card
