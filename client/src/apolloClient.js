import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql'
});

const authLink = setContext((_, { headers }) => {
    console.log("hello")
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem('token')
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});


export default client;