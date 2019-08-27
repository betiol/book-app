import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import UserStorage from '../utils/UserStorage';

const BASE_URL = 'http://192.168.1.5:5001/graphql';

const fetchQuery = async (request, variables) => {
	const body = JSON.stringify({
		query: request.text,
		variables,
	});

	const token = await UserStorage.getToken();

	const headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: token,
	};

	const response = await fetch(BASE_URL, {
		method: 'POST',
		headers,
		body,
	});

	return await response.json();
};

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
	network,
	store,
});

export default env;
