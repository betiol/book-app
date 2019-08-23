/**
 * @flow
 * @relayHash 4df4d216c9bebf105b9d0182d998c45a
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
    +user: ?{|
      +id: string,
      +_id: ?string,
      +name: ?string,
      +likes: ?$ReadOnlyArray<?string>,
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
    user {
      id
      _id
      name
      likes
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
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
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
            "name": "_id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "likes",
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
    "text": "mutation UserLikeBookMutation(\n  $input: UserLikeBookInput!\n) {\n  UserLikeBook(input: $input) {\n    user {\n      id\n      _id\n      name\n      likes\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '97248ffae8fbcd92d93f5e2231ce753d';
module.exports = node;
