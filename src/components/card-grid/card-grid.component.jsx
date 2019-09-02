import React from 'react';
import { Card } from '../card/card.component';
import './card-grid.styles.css';

export const CardGrid = props => (
  <ul className="card-grid">
    {props.emojis.map(emoji => (
      <Card key={emoji.id} emoji={emoji} />
    ))}
  </ul>
);
