import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { useParams } from 'react-router';
import Ship from '../models/ship';
import Layout from '../layout';
import Card from '../components/card';
import Button from '../components/button';

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<{ ship: Ship }>(QUERY, { variables: { id } });
  return (
    <Layout title={data?.ship.name} loading={loading} error={error?.message}>
      <img
        src={data?.ship.image ?? 'https://via.placeholder.com/300?text=No image'}
        alt="Ship"
        className="w-full object-cover rounded hover:scale-105 transition duration-150 transform-gpu"
      />

      <section className="my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Card>
            <h2 className="text-center sm:text-2xl font-bold">Home Port</h2>
            <p className="text-center sm:text-xl">{data?.ship.home_port}</p>
          </Card>

          <Card>
            <h2 className="text-center sm:text-2xl font-bold">Year built</h2>
            <p className="text-center sm:text-xl">{data?.ship.year_built}</p>
          </Card>
        </div>

        <Card>
          <h2 className="text-center sm:text-2xl font-bold">Weight</h2>
          <p className="text-center sm:text-xl">
            {Number(data?.ship.weight_kg).toLocaleString()} kg ({Number(data?.ship.weight_lbs).toLocaleString()} lbs)
          </p>
        </Card>
      </section>

      <section className="my-8">
        <h2 className="text-center sm:text-2xl font-bold mb-4">Missions</h2>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Flight
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.ship.missions.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                          No mission... 🤔
                        </td>
                      </tr>
                    ) : (
                      data?.ship.missions.map((mission, idx) => (
                        <tr className={`${idx % 2 == 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`} key={idx}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{idx + 1}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mission.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mission.flight}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center mb-32">
        {data?.ship.url ? (
          <Button to={data?.ship.url} isExternal={true}>
            More info
          </Button>
        ) : null}
      </div>
    </Layout>
  );
}

const QUERY = gql`
  query ship($id: ID!) {
    ship(id: $id) {
      id
      image
      missions {
        name
        flight
      }
      name
      home_port
      url
      weight_kg
      weight_lbs
      year_built
    }
  }
`;
