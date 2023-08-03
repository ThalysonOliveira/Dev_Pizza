import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';

const API_URL = process.env.NEXT_PUBLIC_DEV_PIZZA_API

const httpLink = new HttpLink({ uri: API_URL });

const authMiddleware = new ApolloLink((operation, forward) => {
    const TOKEN = JSON.parse(localStorage.getItem('token') as string)

    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            Authorization: `Bearer ${TOKEN || null}`,
        }
    }));

    return forward(operation);
})

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
});