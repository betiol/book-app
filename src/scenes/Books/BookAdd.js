/**
 * @flow
 */

import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from 'react-navigation-hooks';
import { Formik } from 'formik';
import { Input, Button, ToastError } from '../../components';
import Header from '../../components/Header';
import BookAddMutation from './BookAddMutation';
import { bookValidation } from '../../components/FormValidations/bookValidation';
import Colors from '../../utils/Colors';

function BookAdd() {
	const [ error, setError ] = useState([]);
	const navigation = useNavigation();

	function handleAdd(input) {
		const onCompleted = (res) => {
			const data = res && res.BookAdd;
			if (data.error) {
				setError(data.error);
			}
			if (data && data.book) {
				navigation.navigate('Books');
			}
		};

		const onError = (error) => console.log(error);

		BookAddMutation.commit(input, onCompleted, onError);
	}

	return (
		<Container>
			<SafeAreaTop />
			<Header title={'Add Book'} withNavigation onPress={() => navigation.goBack()} />
			<Formik
				onSubmit={handleAdd}
				validationSchema={bookValidation}
				render={({ values, errors, handleChange, handleSubmit }) => {
					return (
						<View padding={10}>
							<ToastError error={error} />
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
							<Input
								placeholder={'Purchase URL'}
								value={values.purchaseUrl}
								onChangeText={handleChange('purchaseUrl')}
								error={errors.purchaseUrl}
							/>
							<Button onPress={handleSubmit} text={'Save'} />
						</View>
					);
				}}
			/>
		</Container>
	);
}

const Container = styled.KeyboardAvoidingView.attrs({
	behavior: 'padding',
	enabled: Platform.OS === 'ios',
})`
	flex: 1;
`;

const SafeAreaTop = styled.SafeAreaView`background-color: ${Colors.primary};`;

export default BookAdd;
