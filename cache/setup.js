import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";
import fetch from 'cross-fetch';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: '/graphql', fetch })
})

export const WithApolloProvider = (Component) => {
    const NewComponent = () => {
        return (
            <ApolloProvider client={client}>
                <Component />
            </ApolloProvider>
        );
    }

    return NewComponent;
};