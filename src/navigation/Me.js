/**
 * @flow
 */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { QueryRenderer, graphql } from 'react-relay';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createQueryRenderer } from '../relay/createQueryRenderer';
import Environment from '../relay/Environment';
import Colors from '../utils/Colors';
import { DrawerItems } from 'react-navigation';
import UserStorage from '../utils/UserStorage';

function getInitialLetters(name: string): string {
	const initials: string = name
		.split(' ')
		.map((x) => x.charAt(0))
		.join('')
		.substr(0, 2)
		.toUpperCase();
	return initials;
}

export default function Me() {
	return (
		<QueryRenderer
			environment={Environment}
			query={graphql`
				query MeQuery {
					me {
						id
						_id
						name
						email
					}
				}
			`}
			render={({ error, props }) => {
				if (!props) return <Text>Loading...</Text>;
				if (props) {
					return (
						<UserContainer>
							<AvatarTextContainer>
								<AvatarText>
									{props.me && getInitialLetters(props.me && props.me.name)}
								</AvatarText>
							</AvatarTextContainer>
							<Name>{props.me && props.me.name}</Name>
						</UserContainer>
					);
				}

				return <Text>Loading...</Text>;
			}}
		/>
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
