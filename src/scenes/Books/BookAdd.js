/**
 * @flow
 */

import React, { Fragment } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from 'react-navigation-hooks';
import { Formik } from 'formik';
import { Input, Button } from '../../components';
import Header from '../../components/Header';
import BookAddMutation from './BookAddMutation';
import { bookValidation } from '../../components/FormValidations/bookValidation';
import Colors from '../../utils/Colors';

function BookAdd() {
	const navigation = useNavigation();

	function handleAdd(input) {
		const onCompleted = () => navigation.navigate('Books');

		const onError = (error) => console.log(error);

		BookAddMutation.commit(input, onCompleted, onError);
	}

	return (
		<Fragment>
			<SafeAreaTop />
			<Header title={'Add Book'} withNavigation onPress={() => navigation.goBack()} />
			<Formik
				onSubmit={handleAdd}
				validationSchema={bookValidation}
				render={({ values, errors, handleChange, handleSubmit }) => {
					return (
						<Container>
							<Fragment>
								<Input
									placeholder={'Title'}
									value={values.title}
									onChangeText={handleChange('title')}
									error={errors.title}
								/>
								<Input
									placeholder={'Description'}
									value={values.description}
									onChangeText={handleChange('description')}
									error={errors.description}
								/>
								<Input
									placeholder={'Price'}
									value={values.price}
									keyboardType={'numeric'}
									onChangeText={handleChange('price')}
									error={errors.price}
								/>
								<Input
									placeholder={'Pages'}
									value={values.pages}
									onChangeText={handleChange('pages')}
									error={errors.pages}
								/>
								<Input
									placeholder={'Image URL'}
									value={values.image}
									onChangeText={handleChange('image')}
									error={errors.image}
								/>
								<Input
									placeholder={'Author'}
									value={values.author}
									onChangeText={handleChange('author')}
									error={errors.author}
								/>
								<Button onPress={handleSubmit} text={'Save'} />
							</Fragment>
						</Container>
					);
				}}
			/>
		</Fragment>
	);
}

const Container = styled.KeyboardAvoidingView.attrs({
	behavior: 'padding',
	enabled: Platform.OS === 'ios'
})`
	flex: 1;
  padding: 10px;
`;

const SafeAreaTop = styled.SafeAreaView`background-color: ${Colors.primary};`;

export default BookAdd;
