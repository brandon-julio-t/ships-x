import React from 'react';
import { Link } from 'react-router-dom';
import BaseProps from '../interfaces/base-props';
import Ship from '../models/ship';
import Card from './card';
import CardShipFavorite from './card-ship-favorite';

interface CardShipProps extends BaseProps {
  ship: Ship;
}

export default function CardShip(props: CardShipProps) {
  const { ship } = props;
  const to = `/detail/${ship.id}`;
  return (
    <Card key={ship.id}>
      <Link to={to}>
        <img
          src={ship.image ?? 'https://via.placeholder.com/300?text=No image'}
          alt="Ship"
          className="h-64 w-full object-cover rounded mb-4"
        />
      </Link>
      <section className="flex">
        <Link to={to} className="flex-1">
          <h2 className="text-xl font-bold">{ship.name}</h2>
          <p className="font-light">{ship.type}</p>
        </Link>
        <div className="justify-self-end self-end z-10">
          <CardShipFavorite key={ship.id} ship={ship} />
        </div>
      </section>
    </Card>
  );
}
