import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import Card from '../components/card';
import Error from '../components/error';
import Loading from '../components/loading';
import CardShip from '../components/card-ship';
import FavoriteService from '../services/favorite-service';
import Ship from '../models/ship';
import Layout from '../layout';

export default function Favorites() {
  const service = FavoriteService.getInstance();
  const favoriteShips = service.getFavorites();
  return (
    <Layout title="Favorites ❤">
      {favoriteShips.length === 0 ? (
        <h2 className="sm:text-2xl text-center">No favorites... 💔</h2>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
          {favoriteShips.map(ship => (
            <CardShip ship={ship} key={ship.id} />
          ))}
        </section>
      )}
    </Layout>
  );
}

const QUERY = gql`
  query ship($id: ID!) {
    ship(id: $id) {
      id
      image
      name
      type
    }
  }
`;
