/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { IMAGES } from '../../assets/images';
import Image from 'react-native-fast-image';

export type Book = {
	image: string
};

export function BookItem({ image }: Book) {
	return (
		<View style={styles.item}>
			<FastImage
				fallback
				defaultSource={IMAGES.BOOK_NOT_EXISTS}
				source={{ uri: image, priority: Image.priority.normal }}
			/>
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
			width: 3,
			height: 4,
		},
		marginBottom: 4,
		shadowOpacity: 0.5,
		shadowRadius: 3,
		elevation: 4,
	},
});
