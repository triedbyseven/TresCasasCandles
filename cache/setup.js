import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://pokeapi-graphiql.herokuapp.com/',
    cache: new InMemoryCache()
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