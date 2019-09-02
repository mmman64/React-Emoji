import React from 'react';
import './card.styles.css';

export const Card = props => (
  <li className="card-item">
    <div className="card-container">
      <img
        alt="emoji"
        src={`/${props.emoji.image}`}
        alt={`An emoji by ${props.emoji.creator}`}
        height="180"
        width="180"
      />
      <div className="emoji-details">
        <h2> {props.emoji.name} </h2>
        <p> {props.emoji.usecase} </p>
      </div>
    </div>
  </li>
);
