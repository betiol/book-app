/**
 * @flow
 */

import React, { useEffect, useRef } from 'react';
import Toast, { DURATION } from 'react-native-easy-toast';
import styled from 'styled-components';
import { string, bool } from 'prop-types';

type Props = {
	hasError: boolean,
	text: string
};

export function ToastError({ hasError, text }: Props) {
	const toast = useRef();

	useEffect(
		() => {
			if (hasError) {
				toast.current.show(text);
			}
		},
		[ hasError ]
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
	text: string.isRequired
};
