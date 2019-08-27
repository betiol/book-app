/**
 * @flow
 */

import React, { Fragment } from 'react';
import { Text, Image, Linking, View } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import Colors from '../../utils/Colors';
import Header from '../../components/Header';
import { BookItem } from './BookItem';
import { Transition } from 'react-navigation-fluid-transitions';
import { createQueryRenderer } from '../../relay/createQueryRenderer';
import UserLikeBookMutation from './UserLikeBookMutation';

function BookDetails({ query, navigation }) {
	const index = useNavigationParam('index');

	function handleLike(book) {
		const onCompleted = (response) => console.log(response);

		const onError = (error) => console.log(error);

		const input = { book };

		UserLikeBookMutation.commit(input, onCompleted, onError);
	}

	return (
		<Container>
			<SafeAreaTop />
			<Header title={'Design Books'} withNavigation onPress={() => navigation.goBack()} />
			<Details>
				<HeadWrapper>
					<BookImage>
						<Transition shared={`image${index}`}>
							<BookItem image={query.book.image} />
						</Transition>
						<Pages>{query.book.pages} pages</Pages>
					</BookImage>
					<BookInfos>
						<Transition appear="horizontal">
							<View style={{ flex: 1, justifyContent: 'space-between' }}>
								<Title numberOfLines={2}>{query.book.title}</Title>
								<Author>{query.book.author}</Author>
								<Price>$ {query.book.price}</Price>
								<ButtonsContainer>
									<BuyItNow
										onPress={() => Linking.openURL(query.book.purchaseUrl)}
									>
										<BuyItNowText>Buy it now</BuyItNowText>
									</BuyItNow>
								</ButtonsContainer>
							</View>
						</Transition>
					</BookInfos>
				</HeadWrapper>
			</Details>
			<Description>
				<DescriptionText>{query.book.description}</DescriptionText>
			</Description>
			<ActionButton
				buttonColor={'#dc4b5d'}
				renderIcon={() => (
					<Ionicons
						size={20}
						name={query.book.likedByUser ? 'ios-heart' : 'ios-heart-empty'}
						color={'white'}
					/>
				)}
				onPress={() => handleLike(query.book._id)}
				degrees={0}
			/>
		</Container>
	);
}

const Container = styled.View`
	flex: 1;
	background-color: ${Colors.primary};
`;

const Details = styled.View`
	flex: 1;
	padding: 10px;
	margin-top: 10px;
	background-color: ${Colors.primary};
`;

const SafeAreaTop = styled.SafeAreaView`background-color: ${Colors.primary};`;

const Description = styled.ScrollView`
	flex: 3;
	background-color: white;
	padding: 10px;
`;

const DescriptionText = styled.Text`
	font-size: #4f565d;
	font-weight: 400;
	font-size: 14px;
	line-height: 30px;
`;

const ButtonsContainer = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;

const BuyItNow = styled.TouchableOpacity`
	padding: 10px;
	margin-right: 10px;
	border-radius: 10px;
	background-color: ${Colors.blue};
	justify-content: center;
	align-self: baseline;
	align-items: center;
`;

const BuyItNowText = styled.Text`
	color: white;
	font-weight: bold;
`;

const HeadWrapper = styled.View`
	flex: 1;
	flex-direction: row;
`;

const BookImage = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const BookInfos = styled.View`
	flex: 2;
	margin-left: 5px;
`;

const Title = styled.Text`
	font-weight: bold;
	font-size: 16;
`;

const Author = styled.Text`
	color: #9f8b0c;
	font-size: 13px;
	margin-top: 5px;
	margin-top: 2px;
`;

const Price = styled.Text`
	font-weight: bold;
	color: #2c2605;
	font-size: 17;
	margin-top: 5px;
`;

const Pages = styled.Text`
	color: #9f8b0c;
	font-size: 14px;
	text-align: center;
	margin-top: 10px;
	flex: 1;
`;

const BookDetailsFragmentContainer = createFragmentContainer(BookDetails, {
	query: graphql`
		fragment BookDetails_query on Query @argumentDefinitions(id: { type: "ID!" }) {
			book(id: $id) {
				_id
				id
				title
				description
				image
				pages
				author
				stars
				price
				purchaseUrl
				likedByUser
			}
		}
	`
});

export default createQueryRenderer(BookDetailsFragmentContainer, BookDetails, {
	query: graphql`
		query BookDetailsQuery($id: ID!) {
			...BookDetails_query @arguments(id: $id)
		}
	`,
	queriesParams: () => {
		const book = useNavigationParam('book');
		return {
			id: book.id
		};
	}
});
