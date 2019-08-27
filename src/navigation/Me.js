/**
 * @flow
 */

import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import Colors from '../utils/Colors';

function getInitialLetters(name: string): string {
	const initials: string = name
		.split(' ')
		.map((x) => x.charAt(0))
		.join('')
		.substr(0, 2)
		.toUpperCase();
	return initials;
}

export default function Me(props) {
	const user =
		props && props.screenProps && props.screenProps.user && props.screenProps.user.user;
	if (!user) {
		return <Text>Loading...</Text>;
	}

	return (
		<UserContainer>
			<AvatarTextContainer>
				<AvatarText>{getInitialLetters(user && user.name)}</AvatarText>
			</AvatarTextContainer>
			<Name>{user && user.name}</Name>
		</UserContainer>
	);
}

const AvatarTextContainer = styled.View`
	width: 80px;
	height: 80px;
	background-color: white;
	border-radius: 40px;
	justify-content: center;
	align-items: center;
	align-self: center;
`;

const MenuText = styled.Text`
	color: ${Colors.blue};
	font-size: 20px;
`;

const Name = styled.Text`
	font-weight: bold;
	text-align: center;
	font-size: 20px;
	color: white;
	margin-top: 10px;
`;

const AvatarText = styled.Text`
	color: black;
	font-size: 30px;
	font-weight: bold;
`;

const IconContainer = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 30px;
	opacity: 0.8;
`;

const UserContainer = styled.View`
	flex: 1;
	background-color: black;
	justify-content: center;
	align-items: center;
`;
