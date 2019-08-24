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
			user {
				id
				_id
				name
				likes
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
		updater: (store) => {
			const book = store.getRootField('UserLikeBook');
			const user = book.getLinkedRecord('user');
			const tp = user.getType();
		},
		variables,
		onCompleted,
		onError
	});
}

export default { commit };
