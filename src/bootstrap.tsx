import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import BaseProps from './interfaces/base-props';

export default function Bootstrap(props: BaseProps) {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        {props.children}
      </ApolloProvider>
    </React.StrictMode>
  );
}
