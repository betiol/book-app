/**
 * @flow
 */

import React, { useEffect, useRef } from 'react';
import Toast, { DURATION } from 'react-native-easy-toast';
import { string, bool } from 'prop-types';

type Error = {
	path: string,
	message: string
};

type Props = {
	error: Array<Error>
};

export function ToastError({ error }: Props) {
	const toast = useRef();
	useEffect(
		() => {
			if (error.length) {
				const errors = Object.values(error).map((err) => `- ${err.message}`).join(' \n');
				toast.current.show(errors, DURATION.LENGTH_SHORT);
			}
		},
		[ error ]
	);

	return (
		<Toast
			ref={toast}
			style={{ backgroundColor: 'red' }}
			position="top"
			positionValue={200}
			fadeInDuration={750}
			fadeOutDuration={1000}
			opacity={0.8}
			textStyle={{ color: 'white' }}
		/>
	);
}

ToastError.propTypes = {
	hasError: bool.isRequired,
	text: string.isRequired,
};
