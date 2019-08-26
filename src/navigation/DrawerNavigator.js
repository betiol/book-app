/**
 * @flow
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Books from '../scenes/Books/Books';
import LikedBooks from '../scenes/Books/LikedBooks';
import BookDetails from '../scenes/Books/BookDetails';
import BookAdd from '../scenes/Books/BookAdd';
import Login from '../scenes/Auth/Login';
import DrawerNavigatorItems from './DrawerNavigatorItems';
import Colors from '../utils/Colors';
import { createFluidNavigator, FluidNavigator } from 'react-navigation-fluid-transitions';

const BooksRoutes = FluidNavigator({
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

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	icon: {
		marginHorizontal: 16,
		width: 24,
		alignItems: 'center'
	},
	label: {
		margin: 16,
		fontWeight: 'bold',
		color: Colors.darkText
	},
	drawerHeader: {
		height: 180,
		justifyContent: 'center',
		alignContent: 'center',
		flexDirection: 'row'
	},
	drawerHeaderNameText: {
		backgroundColor: 'transparent',
		color: Colors.lighterText,
		fontSize: 20
	},
	drawerHeaderText: {
		backgroundColor: 'transparent',
		color: Colors.lighterText
	}
});
