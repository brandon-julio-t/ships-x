import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Ship from '../models/ship';
import CardShip from '../components/card-ship';
import Layout from '../layout';

function Search() {
  const { loading, error, data } = useQuery<{ ships: Ship[] }>(QUERY);

  const [proxy, setProxy] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setProxy(
      data?.ships.filter(ship =>
        Object.values(ship).some(value => `${value}`.toLowerCase().includes(filter.toLowerCase()))
      ) ?? []
    );
  }, [loading, filter]);

  return (
    <Layout title="Search Ships 🔍" loading={loading} error={error?.message}>
      <section className="my-8">
        <input
          type="text"
          name="email"
          id="email"
          className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Ship name..."
          onChange={e => setFilter(e.target.value)}
        />
      </section>

      {proxy.length === 0 ? (
        <h2 className="sm:text-2xl text-center">No matching ship... 🤔</h2>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
          {proxy.map(ship => (
            <CardShip ship={ship} key={ship.id} />
          ))}
        </section>
      )}
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

export default Search;
