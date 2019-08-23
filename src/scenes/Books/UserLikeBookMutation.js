//@flow
import { graphql, commitMutation } from 'react-relay';
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
		variables,
		onCompleted,
		onError
	});
}

export default { commit };
