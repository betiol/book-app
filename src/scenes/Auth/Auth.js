/**
 * @flow
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';
import Colors from '../../utils/Colors';

export default function Auth({ screenProps, navigation }) {
	const [ isNewUser, setNewUser ] = useState(false);

	const changeScreen = (term) => {
		if (term) {
			navigation.navigate('Register');
			setNewUser(term);
		} else {
			navigation.navigate('Login');
			setNewUser(term);
		}
	};

	return (
		<Container>
			<Yellow />
			{isNewUser ? (
				<Register screenProps={screenProps} setRegister={setNewUser} />
			) : (
				<Login screenProps={screenProps} setRegister={setNewUser} />
			)}
			<White />
		</Container>
	);
}

const Container = styled.KeyboardAvoidingView.attrs({
	behavior: 'padding',
	enabled: Platform.OS === 'ios'
})`
	flex: 1;
	justify-content: center;
	align-content: center;
`;

const Yellow = styled.View`
	flex: 1;
	background-color: ${Colors.primary};
`;

const White = styled.View`
	flex: 1;
	background-color: #fff;
`;

const TextWithLineButton = styled.TouchableOpacity``;

const TextWithLine = styled.Text`textDecorationLine: underline;`;

const DontHaveAccount = styled.View`
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;

const DontHaveAccountText = styled.Text`font-size: 16;`;

const FormFooter = styled.View`
	flex: 1;
	justify-content: space-between;
`;
