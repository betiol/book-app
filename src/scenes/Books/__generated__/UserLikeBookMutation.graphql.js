/**
 * @flow
 * @relayHash 81cb89e38808bdc15b71c772780d3aaf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserLikeBookInput = {|
  book?: ?string,
  clientMutationId?: ?string,
|};
export type UserLikeBookMutationVariables = {|
  input: UserLikeBookInput
|};
export type UserLikeBookMutationResponse = {|
  +UserLikeBook: ?{|
    +book: ?{|
      +id: string,
      +likedByUser: ?boolean,
    |}
  |}
|};
export type UserLikeBookMutation = {|
  variables: UserLikeBookMutationVariables,
  response: UserLikeBookMutationResponse,
|};
*/


/*
mutation UserLikeBookMutation(
  $input: UserLikeBookInput!
) {
  UserLikeBook(input: $input) {
    book {
      id
      likedByUser
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserLikeBookInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "UserLikeBook",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserLikeBookPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "book",
        "storageKey": null,
        "args": null,
        "concreteType": "Book",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "likedByUser",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserLikeBookMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserLikeBookMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UserLikeBookMutation",
    "id": null,
    "text": "mutation UserLikeBookMutation(\n  $input: UserLikeBookInput!\n) {\n  UserLikeBook(input: $input) {\n    book {\n      id\n      likedByUser\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ebf9c3676bd2528607e35863d4727613';
module.exports = node;
