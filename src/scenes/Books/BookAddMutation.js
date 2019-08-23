//@flow
import { graphql, commitMutation } from 'react-relay';
import Environment from '../../relay/Environment';
import type {
	BookAddMutationVariables,
	BookAddMutationResponse
} from './__generated__/BookAddMutation.graphql';

const mutation = graphql`
	mutation BookAddMutation($input: BookAddInput!) {
		BookAdd(input: $input) {
			book {
				id
				title
				description
			}
		}
	}
`;

function commit(
	input: $PropertyType<BookAddMutationVariables, 'input'>,
	onCompleted: (response: BookAddMutationResponse) => void,
	onError: (error: Object) => void
): BookAddMutationResponse {
	const variables = { input };
	return commitMutation(Environment, {
		mutation,
		variables,
		onCompleted,
		onError
	});
}

export default { commit };
