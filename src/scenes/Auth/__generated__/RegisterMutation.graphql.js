/**
 * @flow
 * @relayHash f5858344ecf82e4c962dd6e4e3556907
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/)
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/),
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
    "text": "mutation RegisterMutation(\n  $input: RegisterEmailInput!\n) {\n  RegisterEmail(input: $input) {\n    token\n    user {\n      name\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '28419177bd3fc65069087847287cd5a5';
module.exports = node;
