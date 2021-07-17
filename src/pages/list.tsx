import React from 'react';
import { gql, useQuery } from '@apollo/client';
import CardShip from '../components/card-ship';
import Button from '../components/button';
import Layout from '../layout';
import Ship from '../models/ship';

function List() {
  const { loading, error, data } = useQuery<{ ships: Ship[] }>(QUERY);
  return (
    <Layout title="SpaceX Ships 🚢" loading={loading} error={error?.message}>
      <section className="my-8 flex justify-center">
        <Button to="/search">Search Ship</Button>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
        {data?.ships.map(ship => (
          <CardShip ship={ship} key={ship.id} />
        ))}
      </section>
    </Layout>
  );
}

const QUERY = gql`
  query ships {
    ships {
      id
      name
      image
      type
    }
  }
`;

export default List;
