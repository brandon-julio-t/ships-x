import React from 'react';
import Container from '../components/container';
import Error from '../components/error';
import Loading from '../components/loading';
import BaseProps from '../interfaces/base-props';
import Navbar from './navbar';

interface LayoutProps extends BaseProps {
  error?: string;
  loading?: boolean;
  title: string;
}

export default function Layout(props: LayoutProps) {
  const { children, error, loading, title } = props;
  return (
    <>
      <Navbar />
      <Container>
        <h1 className="text-3xl md:text-6xl lg:text-9xl text-center my-8 md:my-16 lg:my-32">{title}</h1>
        <main>{loading ? <Loading /> : error ? <Error>{error}</Error> : children}</main>
      </Container>
    </>
  );
}
