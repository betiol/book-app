//@flow
import * as yup from 'yup';

export const bookValidation = yup.object().shape({
	title: yup.string().required('book name is required'),
	description: yup.string().required('book description is required'),
	image: yup.string().required('book image is required'),
	author: yup.string().required('book author is required'),
	price: yup.number().required('book price is required')
});
