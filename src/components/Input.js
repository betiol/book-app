/**
 * @flow
 */

import React, { Fragment } from 'react';
import styled from 'styled-components';
import Colors from '../utils/Colors';

export function Input(props) {
	return (
		<Fragment>
			<TextInput
				autoCorrect={false}
				top={props.top}
				border={props.error}
				autoCapitalize={'none'}
				{...props}
			/>
			<TextError>{props.error}</TextError>
		</Fragment>
	);
}

const TextInput = styled.TextInput`
	height: 40px;
  align-self: stretch;
	border-radius: 4px;
	border-width: 1;
	margin-top: ${({ top }) => (top ? 0 : 10)}
	padding: 5px;
	border-color: ${({ error }) => (error ? 'red' : Colors.grey)};
`;

const TextError = styled.Text`
	color: red;
	font-weight: 500;
	font-size: 14px;
`;
