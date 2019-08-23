import React, { useEffect, useState } from 'react';
import { LoggedInRoutes, Navigator, LoggedOutRoutes } from './navigation/Routes';
import UserStorage from './utils/UserStorage';
import Colors from './utils/Colors';

function App(props) {
	let router = LoggedInRoutes.router;
	console.log(router);
	const [ user, setUser ] = useState({});
	const [ loaded, setLoaded ] = useState({});

	useEffect(() => {
		loadUser();
		// UserStorage.clearAll();
	}, []);

	async function loadUser() {
		try {
			let user = await UserStorage.getUser();
			setLoaded(true);
			setUser(user);
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
		return null;
	}

	let Routes = LoggedInRoutes;

	if (!user) {
		Routes = LoggedOutRoutes;
	}

	return <Routes screenProps={{ user, onUserUpdate: onUserUpdate }} />;
}

export default App;
