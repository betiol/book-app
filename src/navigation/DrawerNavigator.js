/**
 * @flow
 */

import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { createFluidNavigator } from 'react-navigation-fluid-transitions';
import Books from '../scenes/Books/Books';
import LikedBooks from '../scenes/Books/LikedBooks';
import BookDetails from '../scenes/Books/BookDetails';
import BookAdd from '../scenes/Books/BookAdd';
import DrawerNavigatorItems from './DrawerNavigatorItems';
import Colors from '../utils/Colors';

const BooksRoutes = createFluidNavigator({
	Books,
	LikedBooks,
	BookDetails,
	BookAdd
});

export default createDrawerNavigator(
	{
		BooksRoutes
	},
	{
		drawerBackgroundColor: Colors.primary,
		contentComponent: DrawerNavigatorItems
	}
);
