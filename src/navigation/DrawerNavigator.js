/**
 * @flow
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Books from '../scenes/Books/Books';
import Login from '../scenes/Auth/Login';
import Me from './Me';
import Colors from '../utils/Colors';

export default createDrawerNavigator(
	{
		Books,
		Login
	},
	{
		contentOptions: {
			activeTintColor: Colors.primary
		},
		drawerBackgroundColor: Colors.primary,
		contentComponent: Me
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
