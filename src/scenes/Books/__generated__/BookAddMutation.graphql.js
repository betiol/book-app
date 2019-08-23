/**
 * @flow
 * @relayHash 8d4c93ef488e0610be990624df2105a0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BookAddInput = {|
  title: string,
  description?: ?string,
  image?: ?string,
  price: number,
  stars?: ?number,
  author?: ?string,
  purchaseUrl: string,
  pages: string,
  clientMutationId?: ?string,
|};
export type BookAddMutationVariables = {|
  input: BookAddInput
|};
export type BookAddMutationResponse = {|
  +BookAdd: ?{|
    +book: ?{|
      +id: string,
      +title: ?string,
      +description: ?string,
    |}
  |}
|};
export type BookAddMutation = {|
  variables: BookAddMutationVariables,
  response: BookAddMutationResponse,
|};
*/


/*
mutation BookAddMutation(
  $input: BookAddInput!
) {
  BookAdd(input: $input) {
    book {
      id
      title
      description
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "BookAddInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "BookAdd",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "BookAddPayload",
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
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
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
    "name": "BookAddMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "BookAddMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "BookAddMutation",
    "id": null,
    "text": "mutation BookAddMutation(\n  $input: BookAddInput!\n) {\n  BookAdd(input: $input) {\n    book {\n      id\n      title\n      description\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'acccbe30e7ac1bcebce7d80fea5d567d';
module.exports = node;
