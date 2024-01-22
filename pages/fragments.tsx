import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Episodes } from '../components/graphql/Episodes';
import {GetEpisodesDocument} from "../components/graphql/__generated__/EpisodesQuery";
import response from './fakeResult.json';

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
})

// just to make it same for client/server side we just manually load the data response and load the client
client.writeQuery({
    query: GetEpisodesDocument,
    data: response.data
})

export default function Home() {
    return (
        <div className="app">
            <ApolloProvider client={client}>
                <Episodes useFragments={true}/>
            </ApolloProvider>
        </div>
    )
}
