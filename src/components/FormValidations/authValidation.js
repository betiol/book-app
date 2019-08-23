//@flow
import * as yup from 'yup';

export const loginValidation = yup.object().shape({
	email: yup.string().required('email is required'),
	password: yup.string().required('password is required')
});

export const registerValidation = yup.object().shape({
	name: yup.string().required('name is required'),
	email: yup.string().required('email is required'),
	password: yup.string().required('password is required')
});
