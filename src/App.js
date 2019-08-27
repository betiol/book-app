import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LoggedInRoutes, LoggedOutRoutes } from './navigation/Routes';
import UserStorage from './utils/UserStorage';

function App() {
	const [ user, setUser ] = useState();
	const [ loaded, setLoaded ] = useState(false);

	useEffect(
		() => {
			loadUser();
		},
		[ loaded ]
	);

	async function loadUser() {
		try {
			let user = await UserStorage.getUser();
			setUser(user);
			setLoaded(true);
		} catch (e) {
			setLoaded(true);
		}
	}

	function onUserUpdate(user) {
		if (user) {
			setUser(user);
		}
		UserStorage.updateUser(user);
	}

	if (!loaded) {
		return (
			<LoadingViews>
				<Loader />
			</LoadingViews>
		);
	}

	if (!user) {
		return <LoggedOutRoutes screenProps={{ user, onUserUpdate: onUserUpdate }} />;
	}

	return <LoggedInRoutes screenProps={{ user, onUserUpdate: onUserUpdate }} />;
}

const LoadingViews = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Loader = styled.ActivityIndicator.attrs({
	size: 'large',
})``;

export default App;
