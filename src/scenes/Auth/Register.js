/**
 * @flow
 */

import React, { useState, Fragment } from 'react';
import { Dimensions, StyleSheet, Platform } from 'react-native';
import { Formik } from 'formik';
import styled from 'styled-components';
import Colors from '../../utils/Colors';
import { Input, Button, ToastError } from '../../components';
import RegisterMutation from './RegisterMutation';
import { registerValidation } from '../../components/FormValidations/authValidation';

const { width, height } = Dimensions.get('window');

function Register({ screenProps, navigation }) {
	const [ error, setError ] = useState('');

	function handleRegister({ name, email, password }) {
		const input = { email, password, name };

		const onCompleted = async (res) => {
			const data = res && res.RegisterEmail;
			if (data.error) {
				setError(data.error);
			}
			if (data && data.token) {
				screenProps.onUserUpdate && screenProps.onUserUpdate(data);
			}
		};

		const onError = (e) => console.log(e);

		RegisterMutation.commit(input, onCompleted, onError);
	}

	return (
		<Container>
			<Yellow />
			<Formik
				onSubmit={handleRegister}
				validationSchema={registerValidation}
				render={({ errors, values, handleSubmit, handleChange }) => {
					return (
						<LoginForm style={styles.form}>
							<Title>SIGN UP</Title>
							<Input
								value={values.name}
								placeholder={'Your name'}
								error={errors.name}
								onChangeText={handleChange('name')}
							/>
							<Input
								value={values.email}
								keyboardType={'email-address'}
								error={errors.email}
								placeholder={'Email'}
								onChangeText={handleChange('email')}
							/>
							<Input
								onChangeText={handleChange('password')}
								value={values.password}
								error={errors.password}
								placeholder={'Password'}
								secureTextEntry
							/>
							<FormFooter>
								<Button onPress={handleSubmit} text={'Send'} />
								<DontHaveAccount>
									<TextWithLineButton
										onPress={() => navigation.navigate('Login')}
									>
										<TextWithLine> Back to Login</TextWithLine>
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
	enabled: Platform.OS === 'ios',
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

const Title = styled.Text`
	font-weight: bold;
	font-size: 22px;
	text-align: center;
`;

const LoginForm = styled.View`
	position: absolute;
	height: ${height / 2};
	width: ${width - 80};
	background-color: white
	z-index: 1;
	align-self: center;
  top: 30%;
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
`;

const FormFooter = styled.View`
	flex: 1;
	justify-content: space-between;
`;

const TextWithLineButton = styled.TouchableOpacity``;

const TextWithLine = styled.Text`textDecorationLine: underline;`;

const DontHaveAccount = styled.View`
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;

const DontHaveAccountText = styled.Text``;

const styles = StyleSheet.create({
	form: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
});

export default Register;
