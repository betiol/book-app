//@flow
import { commitMutation, graphql } from 'react-relay';
import RelayEnvironment from '../../relay/Environment';
import {
	LoginMutationVariables,
	LoginMutationResponse,
} from './__generated__/LoginMutation.graphql';

const mutation = graphql`
	mutation LoginMutation($input: LoginEmailInput!) {
		LoginEmail(input: $input) {
			token
			error
			user {
				name
			}
		}
	}
`;

function commit(
	input: $PropertyType<LoginMutationVariables, 'input'>,
	onCompleted: (response: LoginMutationResponse) => void,
	onError: (error: Object) => void
): LoginMutationResponse {
	const variables = { input };
	return commitMutation(RelayEnvironment, {
		mutation,
		variables,
		onCompleted,
		onError,
	});
}

export default { commit };
