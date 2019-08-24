/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { Transition } from 'react-navigation-fluid-transitions';
import Image from 'react-native-fast-image';

export type Book = {
	image: string
};

export function BookItem({ image }: Book) {
	return (
		<View style={styles.item}>
			<FastImage source={{ uri: image, priority: Image.priority.normal }} />
		</View>
	);
}

const FastImage = styled(Image)`
	width: 100px;
	height: 130px;
`;

const styles = StyleSheet.create({
	item: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 8
		},
		marginBottom: 5,
		shadowOpacity: 0.4,
		shadowRadius: 3,
		elevation: 8
	}
});
