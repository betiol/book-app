/**
 * @flow
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import Me from './Me';
import UserStorage from '../utils/UserStorage';

function DrawerNavigatorItems(props) {
	async function logout() {
		props.navigation.navigate('Login');
		await UserStorage.clearAll();
		screenProps.onUserUpdate(null);
	}
	return (
		<Container>
			<Me {...props} />
			<MenuContainer>
				<TouchableOpacity onPress={() => props.navigation.navigate('Books')}>
					<Item>
						<Icon>
							<Ionicons name="ios-book" size={24} color={'black'} />
						</Icon>
						<Label>All Books</Label>
					</Item>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => props.navigation.navigate('LikedBooks')}>
					<Item>
						<Icon>
							<Ionicons name="ios-heart" size={24} color={'black'} />
						</Icon>
						<Label>My Library</Label>
					</Item>
				</TouchableOpacity>

				<TouchableOpacity onPress={logout}>
					<Item>
						<Icon>
							<Ionicons name="ios-exit" size={24} color={'black'} />
						</Icon>
						<Label>Exit</Label>
					</Item>
				</TouchableOpacity>
			</MenuContainer>
		</Container>
	);
}

const Container = styled.View`flex: 1;`;

const ItemsContainer = styled.View`flex: 3;`;

const MenuContainer = styled.View`flex: 3;`;

const Item = styled.View`
	flex-direction: row;
	align-items: center;
`;

const Icon = styled.View`
	margin-horizontal: 16;
	width: 24px;
	align-items: center;
`;

const Label = styled.Text`
	margin: 16px;
	font-weight: bold;
`;

export default DrawerNavigatorItems;
