//@flow
import { commitMutation, graphql } from 'react-relay';
import RelayEnvironment from '../../relay/Environment';
import {
	RegisterMutationVariables,
	RegisterMutationResponse
} from './__generated__/RegisterMutation.graphql';

const mutation = graphql`
	mutation RegisterMutation($input: RegisterEmailInput!) {
		RegisterEmail(input: $input) {
			token
			user {
				name
			}
		}
	}
`;

function commit(
	input: $PropertyType<RegisterMutationVariables, 'input'>,
	onCompleted: (response: RegisterMutationResponse) => void,
	onError: (error: Object) => void
): RegisterMutationResponse {
	const variables = { input };
	return commitMutation(RelayEnvironment, {
		mutation,
		variables,
		onCompleted,
		onError
	});
}

export default { commit };
