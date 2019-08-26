import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { createFluidNavigator, FluidNavigator } from 'react-navigation-fluid-transitions';
import Login from '../scenes/Auth/Login';
import Register from '../scenes/Auth/Register';

import Books from '../scenes/Books/Books';
import BookDetails from '../scenes/Books/BookDetails';
import BookAdd from '../scenes/Books/BookAdd';
import DrawerNavigator from './DrawerNavigator';

const RouteConfigMap = {
	DrawerNavigator: {
		path: '/',
		screen: require('./DrawerNavigator').default,
		defaultNavigationOptions: {
			gesturesEnabled: true
		}
	},
	Login: {
		path: '/login',
		screen: require('../scenes/Auth/Login').default,
		defaultNavigationOptions: {
			gesturesEnabled: false
		}
	},
	Register: {
		path: '/register',
		screen: require('../scenes/Auth/Register').default,
		defaultNavigationOptions: {
			gesturesEnabled: false
		}
	}
};

const LoggedInRoutes = createAppContainer(
	createSwitchNavigator(RouteConfigMap, {
		initialRouteName: 'DrawerNavigator'
	})
);

const LoggedOutRoutes = createAppContainer(
	createSwitchNavigator(RouteConfigMap, { initialRouteName: 'Login' })
);

export { LoggedInRoutes, LoggedOutRoutes };
