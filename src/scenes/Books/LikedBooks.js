/**
 * @flow
 */

import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import { createRefetchContainer } from 'react-relay';
import { Transition } from 'react-navigation-fluid-transitions';
import { createQueryRendererWithCustomLoading } from '../../relay/createQueryRenderer';
import Header from '../../components/Header';
import Colors from '../../utils/Colors';
import { BookItem } from './BookItem';
import { withNavigation } from 'react-navigation';

function LikedBooks({ query, relay, isFetching, navigation }) {
	const [ refreshing, setRefreshing ] = useState(false);

	if (isFetching) {
		return null;
	}

	function refetch() {
		setRefreshing(true);
		relay.refetch(
			null,
			null,
			() => {
				setRefreshing(false);
			},
			{
				force: false
			}
		);
	}

	return (
		<Container>
			<Header title={'My Liked Books'} onSearch={null} />
			<Wrapper>
				<FlatList
					data={query.loadLikedBooks.edges}
					numColumns={3}
					refreshing={refreshing}
					onRefresh={refetch}
					keyExtractor={(item) => item.node._id}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item, index }) => (
						<Button
							onPress={() =>
								navigation.navigate('BookDetails', { book: item.node, index })}
						>
							<BooksContainer>
								<Transition shared={`image${index}`}>
									<BookItem image={item.node.image} />
								</Transition>
							</BooksContainer>
						</Button>
					)}
				/>
			</Wrapper>
		</Container>
	);
}

const Container = styled.SafeAreaView`
	flex: 1;
	background-color: ${Colors.primary};
`;

const Wrapper = styled.View`
	flex: 1;
	padding-left: 10px;
	padding-right: 10px;
`;

const BooksContainer = styled.View`
	margin-top: 10px;
	padding: 10px;
	margin-bottom: 5px;
`;

const Button = styled.TouchableOpacity``;

const LikedBooksWithNavigation = withNavigation(LikedBooks);

const BooksRefetchContainer = createRefetchContainer(
	LikedBooksWithNavigation,
	{
		query: graphql`
			fragment LikedBooks_query on Query
				@argumentDefinitions(
					search: { type: String }
					first: { type: Int, defaultValue: 10 }
					cursor: { type: String }
				) {
				loadLikedBooks(first: $first, after: $cursor, search: $search)
					@connection(key: "LikedBooks_loadLikedBooks", filters: []) {
					edges {
						node {
							_id
							id
							image
							likedByUser
						}
					}
				}
			}
		`
	},
	graphql`
		query LikedBooksRefetchQuery($first: Int, $cursor: String, $search: String) {
			...LikedBooks_query @arguments(first: $first, cursor: $cursor, search: $search)
		}
	`
);

export default createQueryRendererWithCustomLoading(
	BooksRefetchContainer,
	LikedBooksWithNavigation,
	{
		query: graphql`
			query LikedBooksQuery {
				...LikedBooks_query
			}
		`,
		variables: {
			first: 10
		}
	}
);
