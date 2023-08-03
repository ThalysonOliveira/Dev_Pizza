import { ApolloClient, InMemoryCache } from "@apollo/client";
import { parseCookies } from "nookies";

const API_URL = process.env.NEXT_PUBLIC_DEV_PIZZA_API

export function setupAPIClient(ctx = undefined) {
    let cookies = parseCookies(ctx);

    return new ApolloClient({
        uri: API_URL,
        cache: new InMemoryCache(),
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    })
}

