"use client";

import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: 'http://localhost:5000/' + "graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  name: "crimewatch-client",
  version: "0.1",
});

const MyApolloProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default MyApolloProvider;
