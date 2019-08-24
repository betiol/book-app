/**
 * @flow
 * @relayHash 86d1d31592da8a0e1e159ab43ef937c1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LikedBooks_query$ref = any;
export type LikedBooksRefetchQueryVariables = {|
  first?: ?number,
  cursor?: ?string,
  search?: ?string,
|};
export type LikedBooksRefetchQueryResponse = {|
  +$fragmentRefs: LikedBooks_query$ref
|};
export type LikedBooksRefetchQuery = {|
  variables: LikedBooksRefetchQueryVariables,
  response: LikedBooksRefetchQueryResponse,
|};
*/


/*
query LikedBooksRefetchQuery(
  $first: Int
  $cursor: String
  $search: String
) {
  ...LikedBooks_query_3Zeowt
}

fragment LikedBooks_query_3Zeowt on Query {
  loadLikedBooks(first: $first, after: $cursor, search: $search) {
    edges {
      node {
        _id
        id
        image
        likedByUser
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "search",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v2 = {
  "kind": "Variable",
  "name": "search",
  "variableName": "search"
},
v3 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  (v1/*: any*/),
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LikedBooksRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "LikedBooks_query",
        "args": [
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LikedBooksRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "loadLikedBooks",
        "storageKey": null,
        "args": (v3/*: any*/),
        "concreteType": "BookConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "BookEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
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
                    "name": "image",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "likedByUser",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "loadLikedBooks",
        "args": (v3/*: any*/),
        "handle": "connection",
        "key": "LikedBooks_loadLikedBooks",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LikedBooksRefetchQuery",
    "id": null,
    "text": "query LikedBooksRefetchQuery(\n  $first: Int\n  $cursor: String\n  $search: String\n) {\n  ...LikedBooks_query_3Zeowt\n}\n\nfragment LikedBooks_query_3Zeowt on Query {\n  loadLikedBooks(first: $first, after: $cursor, search: $search) {\n    edges {\n      node {\n        _id\n        id\n        image\n        likedByUser\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3738e4094fe63f6b335a17a3064be7fe';
module.exports = node;
