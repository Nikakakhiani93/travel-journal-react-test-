import React from 'react';

import Drop from '../drop.svg';

export default function Card(props) {
  return (
    <div className="card" key={props.id}>
      <div className="img-container">
        <img src={props.imageUrl} />
      </div>
      <div className="card--location">
        <div className="card--drop">
          <img src={Drop} alt="" />
          <span className="locationTitle">{props.location}</span>
        </div>
        <h1>{props.title}</h1>
        <div className="date">
          <span className="locationDate">{props.startDate} -</span>
          <span className="locationDate"> {props.endDate}</span>
        </div>
        <p className="locationDesc">{props.description}</p>
      </div>
    </div>
  );
}
