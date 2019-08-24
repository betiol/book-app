import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { createFluidNavigator, FluidNavigator } from 'react-navigation-fluid-transitions';
import Login from '../scenes/Auth/Login';
import Register from '../scenes/Auth/Register';

import Books from '../scenes/Books/Books';
import BookDetails from '../scenes/Books/BookDetails';
import BookAdd from '../scenes/Books/BookAdd';
import DrawerNavigator from './DrawerNavigator';

const RouteConfigMap = {
	Login,
	Register,
	DrawerNavigator,
	Books,
	BookAdd,
	BookDetails
};

const LoggedInRoutes = createAppContainer(
	createFluidNavigator(RouteConfigMap, {
		defaultNavigationOptions: { gesturesEnabled: true },
		initialRouteName: 'DrawerNavigator'
	})
);

const LoggedOutRoutes = createAppContainer(createFluidNavigator(RouteConfigMap), {
	initialRouteName: 'Login'
});

export { LoggedInRoutes, LoggedOutRoutes };
