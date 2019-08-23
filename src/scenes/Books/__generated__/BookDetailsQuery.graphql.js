/**
 * @flow
 * @relayHash f1248071b4eb1aa42bb79787a2f13897
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BookDetails_query$ref = any;
export type BookDetailsQueryVariables = {|
  id: string
|};
export type BookDetailsQueryResponse = {|
  +$fragmentRefs: BookDetails_query$ref
|};
export type BookDetailsQuery = {|
  variables: BookDetailsQueryVariables,
  response: BookDetailsQueryResponse,
|};
*/


/*
query BookDetailsQuery(
  $id: ID!
) {
  ...BookDetails_query_1Bmzm5
}

fragment BookDetails_query_1Bmzm5 on Query {
  book(id: $id) {
    _id
    id
    title
    description
    image
    pages
    author
    stars
    price
    purchaseUrl
    likedByUser
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "BookDetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "BookDetails_query",
        "args": (v1/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookDetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "book",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Book",
        "plural": false,
        "selections": [
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "image",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "pages",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "author",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "stars",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "price",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "purchaseUrl",
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
  },
  "params": {
    "operationKind": "query",
    "name": "BookDetailsQuery",
    "id": null,
    "text": "query BookDetailsQuery(\n  $id: ID!\n) {\n  ...BookDetails_query_1Bmzm5\n}\n\nfragment BookDetails_query_1Bmzm5 on Query {\n  book(id: $id) {\n    _id\n    id\n    title\n    description\n    image\n    pages\n    author\n    stars\n    price\n    purchaseUrl\n    likedByUser\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '10f3423b91e30d417403461dd3c7c86c';
module.exports = node;
