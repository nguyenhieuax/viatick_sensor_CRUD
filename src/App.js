import Container from 'react-bootstrap/Container'
import SensorList from './components/SensorList'
import { actions } from './services'
import gql, { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";

import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {GQL_ENDPOINT} from "./utils/constant";

const httpLink = new HttpLink({
	uri: GQL_ENDPOINT,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.forEach(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
			)
		);

	if (networkError) console.log(`[Network error]: ${networkError}`);
});


const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('gqlToken');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			"X-Api-Key": "da2-zlk3xmy44fg4jpj73vlwlfi7sq",
			"Authorization": token ? `Bearer ${token}` : "",
		}
	}
});



const client = new ApolloClient({
	link: from([errorLink,  authLink.concat(httpLink)]),
	cache: new InMemoryCache()
})


function App() {
	const dispatch = useDispatch()
	const token = localStorage.getItem('gqlToken');

	useEffect(() => {
		dispatch(actions.getGqlToken())
	}, [token]);

	return (
		<ApolloProvider client={client}>
			<Container className='py-3 mt-3' style={{ backgroundColor: 'lightcyan' }}>
				<h1 className='text-center text-info mb-3'>My Sensors</h1>
				<hr />
				<SensorList />
			</Container>
		</ApolloProvider>
	)
}

export default App
