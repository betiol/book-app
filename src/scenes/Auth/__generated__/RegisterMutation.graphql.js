/**
 * @flow
 * @relayHash 04d09e79e0e7e4ad0d72a69b81ade104
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RegisterEmailInput = {|
  name: string,
  email: string,
  password: string,
  clientMutationId?: ?string,
|};
export type RegisterMutationVariables = {|
  input: RegisterEmailInput
|};
export type RegisterMutationResponse = {|
  +RegisterEmail: ?{|
    +token: ?string,
    +error: ?string,
    +user: ?{|
      +name: ?string
    |},
  |}
|};
export type RegisterMutation = {|
  variables: RegisterMutationVariables,
  response: RegisterMutationResponse,
|};
*/


/*
mutation RegisterMutation(
  $input: RegisterEmailInput!
) {
  RegisterEmail(input: $input) {
    token
    error
    user {
      name
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RegisterEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "token",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "error",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RegisterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "RegisterEmail",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RegisterEmailPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RegisterMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "RegisterEmail",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RegisterEmailPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "RegisterMutation",
    "id": null,
    "text": "mutation RegisterMutation(\n  $input: RegisterEmailInput!\n) {\n  RegisterEmail(input: $input) {\n    token\n    error\n    user {\n      name\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '33a7bbc121fdcf48319842426f783774';
module.exports = node;
