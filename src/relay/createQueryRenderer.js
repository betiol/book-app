// @flow
import * as React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import type { GraphQLTaggedNode, Variables } from 'react-relay';
import styled from 'styled-components';
import { QueryRenderer } from 'react-relay';
import environment from './Environment';
import { Button } from '../components';

const Wrapper = styled.View`
	align-items: center;
	justify-content: center;
	background-color: white;
	flex: 1;
	padding: 10px;
`;

const ErrorText = styled.Text`
	font-size: 18px;
	color: black;
	margin-bottom: 10;
`;

type Config = {
	query: ?GraphQLTaggedNode,
	queriesParams?: ?(props: Object) => Object,
	variables?: Variables
};

export function createQueryRenderer(
	FragmentComponent: React.ComponentType<{}>,
	Component: React.ComponentType<{}>,
	config: Config,
	props: any
): React.ComponentType<*> {
	const { query, queriesParams } = config;

	function QueryRendererWrapper(qrProps) {
		const properties = qrProps;
		const variables = queriesParams ? queriesParams(properties) : config.variables;

		return (
			<QueryRenderer
				environment={environment}
				query={query}
				variables={variables}
				render={({ error, props, retry }) => {
					if (error) {
						return (
							<Wrapper>
								<ErrorText>Please check your internet connection</ErrorText>
								<Button text={'Try again'} onPress={retry} />
							</Wrapper>
						);
					}

					if (props) {
						return <FragmentComponent {...properties} query={props} />;
					}
				}}
			/>
		);
	}

	return hoistStatics(QueryRendererWrapper, Component);
}

export function createQueryRendererWithCustomLoading(
	FragmentComponent: React.ComponentType<{}>,
	Component: React.ComponentType<{}>,
	config: Config,
	props: any
): React.ComponentType<*> {
	const { query, queriesParams } = config;

	function QueryRendererWrapper(qrProps) {
		const properties = qrProps;
		const variables = queriesParams ? queriesParams(properties) : config.variables;

		return (
			<QueryRenderer
				environment={environment}
				query={query}
				variables={variables}
				render={({ error, props, retry }) => {
					if (error) {
						return (
							<Wrapper>
								<ErrorText>Please check your internet connection</ErrorText>
								<Button text={'Try again'} onPress={retry} />
							</Wrapper>
						);
					}

					return (
						<FragmentComponent
							isFetching={!props && !error}
							{...properties}
							query={props}
						/>
					);
				}}
			/>
		);
	}

	return hoistStatics(QueryRendererWrapper, Component);
}
