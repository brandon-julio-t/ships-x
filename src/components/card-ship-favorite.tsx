import React, { useState } from 'react';
import BaseProps from '../interfaces/base-props';
import Ship from '../models/ship';
import FavoriteService from '../services/favorite-service';

interface CardShipFavoriteProps extends BaseProps {
  ship: Ship;
}

export default function CardShipFavorite(props: CardShipFavoriteProps) {
  const { className, ship } = props;
  const service = FavoriteService.getInstance();
  const [isFavorited, setIsFavorited] = useState(service.getIsFavorited(ship));
  const style = `${className} ${isFavorited ? 'fill-current' : 'stroke-current'}`;

  return (
    <button
      onClick={() => {
        isFavorited ? service.removeFavorite(ship) : service.addFavorite(ship);
        setIsFavorited(!isFavorited);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 text-red-600 ${style}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}
