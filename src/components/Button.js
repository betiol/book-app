/**
 * @flow
 */

import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import Colors from '../utils/Colors';
import { string, func, bool } from 'prop-types';

type Props = {
	text: string,
	onPress: () => void,
	loading: boolean
};

export function Button({ text, onPress, loading }: Props) {
	return (
		<Wrapper onPress={onPress} disabled={loading} isLoading={loading}>
			<Text>{loading ? <ActivityIndicator size={'small'} /> : text}</Text>
		</Wrapper>
	);
}

const Wrapper = styled.TouchableOpacity`
	height: 38;
	align-self: stretch;
	border-radius: 4;
	margin-top: 10;
	justify-content: center;
	align-content: center;
	align-items: center;
	top: 30;
	opacity: ${({ isLoading }) => (isLoading ? 0.4 : 1)};
	background-color: ${Colors.blue};
`;

const Text = styled.Text`
	color: white;
	font-weight: bold;
	font-size: 15;
`;

Button.propTypes = {
	onPress: func.isRequired,
	loading: bool.isRequired,
	text: string.isRequired,
};
