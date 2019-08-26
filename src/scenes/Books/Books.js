/**
 * @flow
 */

import React, { useState, Fragment } from 'react';
import { View, FlatList, Text } from 'react-native';
import styled from 'styled-components';
import { graphql, createRefetchContainer } from 'react-relay';
import { Transition } from 'react-navigation-fluid-transitions';
import { useNavigation } from 'react-navigation-hooks';
import ActionButton from 'react-native-action-button';
import Colors from '../../utils/Colors';
import { Input } from '../../components';
import Header from '../../components/Header';
import { BookItem } from './BookItem';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createQueryRendererWithCustomLoading } from '../../relay/createQueryRenderer';

const TOTAL_REFETCH_ITEMS = 3;

function Books({ query, relay, isFetching, navigation }) {
	console.log(navigation);
	const [ refreshing, setRefreshing ] = useState(false);
	const [ isFetchingEnd, setIsFetchingEnd ] = useState(false);

	function refetchData() {
		setRefreshing(true);
		refetch();
	}

	function onSearch(search) {
		refetch({ search });
	}

	function refetch(newRefetchVariable) {
		const refetchVariables = (fragmentVariables) => ({
			...fragmentVariables,
			...newRefetchVariable
		});

		relay.refetch(
			refetchVariables,
			null,
			() => {
				setRefreshing(false);
			},
			{
				force: false
			}
		);
	}

	function loadMore() {
		if (isFetchingEnd) return;

		const { books } = query;

		if (!books.pageInfo.hasNextPage) return;

		setIsFetchingEnd(false);

		const { endCursor } = books.pageInfo;

		const total = books.edges.length + TOTAL_REFETCH_ITEMS;
		const refetchVariables = (fragmentVariables) => ({
			...fragmentVariables,
			first: TOTAL_REFETCH_ITEMS,
			cursor: endCursor
		});
		const renderVariables = {
			first: total
		};

		relay.refetch(
			refetchVariables,
			renderVariables,
			() => {
				setIsFetchingEnd(false);
				setRefreshing(false);
			},
			{
				force: false
			}
		);
	}

	if (isFetching) {
		return null;
	}

	console.log('ta caindo aqui antes');

	return (
		<Container>
			<Header onSearch={onSearch} title={'Design Books'} />
			<Wrapper>
				<FlatList
					data={query.books.edges}
					numColumns={3}
					keyExtractor={(item) => item.node._id}
					refreshing={refreshing}
					onRefresh={refetchData}
					showsHorizontalScrollIndicator={false}
					onEndReachedThreshold={0.4}
					onEndReached={loadMore}
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
			<ActionButton onPress={() => navigation.navigate('BookAdd')} degrees={0} />
		</Container>
	);
}

const BooksRefetchContainer = createRefetchContainer(
	Books,
	{
		query: graphql`
			fragment Books_query on Query
				@argumentDefinitions(
					search: { type: String }
					first: { type: Int, defaultValue: 10 }
					cursor: { type: String }
				) {
				books(first: $first, after: $cursor, search: $search)
					@connection(key: "Books_books", filters: []) {
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
		query BooksRefetchQuery($first: Int, $cursor: String, $search: String) {
			...Books_query @arguments(first: $first, cursor: $cursor, search: $search)
		}
	`
);

export default createQueryRendererWithCustomLoading(BooksRefetchContainer, Books, {
	query: graphql`
		query BooksQuery {
			...Books_query
		}
	`,
	variables: {
		first: 10
	}
});

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
