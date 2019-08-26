//@flow
import { graphql, commitMutation } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

import Environment from '../../relay/Environment';
import type {
	UserLikeBookMutationVariables,
	UserLikeBookMutationResponse
} from './__generated__/UserLikeBookMutation.graphql';

const mutation = graphql`
	mutation UserLikeBookMutation($input: UserLikeBookInput!) {
		UserLikeBook(input: $input) {
			book {
				id
				likedByUser
			}
		}
	}
`;

function commit(
	input: $PropertyType<UserLikeBookMutationVariables, 'input'>,
	onCompleted: (response: UserLikeBookMutationResponse) => void,
	onError: (error: Object) => void
): UserLikeBookMutationResponse {
	const variables = { input };

	return commitMutation(Environment, {
		mutation,
		variables,
		updater: (proxyStore) => {
			const payload = proxyStore.getRootField('UserLikeBook');
			const bookEdge = payload.getLinkedRecord('book');
			bookEdge.setValue(!bookEdge.getValue('likedByUser'), 'likedByUser');
		},
		onCompleted,
		onError
	});
}

export default { commit };
