/**
 * @flow
 */

import React, { useState, Fragment } from 'react';
import { Dimensions, StyleSheet, View, Platform } from 'react-native';
import { Formik } from 'formik';
import styled from 'styled-components';
import Colors from '../../utils/Colors';
import { Input, Button, ToastError } from '../../components';
import LoginMutation from './LoginMutation';
import { loginValidation } from '../../components/FormValidations/authValidation';

const { width, height } = Dimensions.get('window');

function Login({ screenProps, navigation }) {
	const [ error, setError ] = useState('');
	function handleLogin({ email, password }) {
		const input = { email, password };

		const onCompleted = async (res) => {
			const data = res && res.LoginEmail;
			if (data.error) {
				setError(data.error);
			}
			if (data && data.token) {
				screenProps.onUserUpdate && screenProps.onUserUpdate(data);
			}
		};

		LoginMutation.commit(input, onCompleted);
	}

	console.log(error);

	return (
		<Container>
			<Yellow />
			<Formik
				onSubmit={handleLogin}
				validationSchema={loginValidation}
				render={({ errors, values, handleSubmit, handleChange }) => {
					return (
						<LoginForm style={styles.form}>
							<Title>SIGN IN</Title>
							<Input
								value={values.email}
								keyboardType={'email-address'}
								placeholder={'Email'}
								onChangeText={handleChange('email')}
								error={errors.email}
							/>
							<Input
								onChangeText={handleChange('password')}
								value={values.password}
								placeholder={'Password'}
								error={errors.password}
								secureTextEntry
							/>
							<FormFooter>
								<Button onPress={handleSubmit} text={'Send'} />
								<DontHaveAccount>
									<DontHaveAccountText>
										Don't have any account?
									</DontHaveAccountText>
									<TextWithLineButton
										onPress={() => navigation.navigate('Register')}
									>
										<TextWithLine> Click here</TextWithLine>
									</TextWithLineButton>
								</DontHaveAccount>
							</FormFooter>
						</LoginForm>
					);
				}}
			/>
			<ToastError text={error} hasError={!!error} />

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

const LoginForm = styled.View`
	position: absolute;
  height: ${height / 2};
	width: ${width - 80};
	background-color: white
	z-index: 1;
  flex: 1;
	align-self: center;
  top: 30%;
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
`;

const TextWithLineButton = styled.TouchableOpacity``;

const TextWithLine = styled.Text`textDecorationLine: underline;`;

const DontHaveAccount = styled.View`
	justify-content: center;
	align-items: center;
	flex-direction: row;
	margin-top: 10px;
`;

const DontHaveAccountText = styled.Text``;

const Title = styled.Text`
	font-weight: bold;
	font-size: 22px;
	text-align: center;
`;

const FormFooter = styled.View`
	flex: 1;
	justify-content: space-between;
`;

const styles = StyleSheet.create({
	form: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	}
});

export default Login;
