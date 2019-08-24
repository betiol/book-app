/**
 * @flow
 * @relayHash 48223820f718a89685004c579d69d89c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LikedBooks_query$ref = any;
export type LikedBooksQueryVariables = {||};
export type LikedBooksQueryResponse = {|
  +$fragmentRefs: LikedBooks_query$ref
|};
export type LikedBooksQuery = {|
  variables: LikedBooksQueryVariables,
  response: LikedBooksQueryResponse,
|};
*/


/*
query LikedBooksQuery {
  ...LikedBooks_query
}

fragment LikedBooks_query on Query {
  loadLikedBooks(first: 10) {
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
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LikedBooksQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "LikedBooks_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LikedBooksQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "loadLikedBooks",
        "storageKey": "loadLikedBooks(first:10)",
        "args": (v0/*: any*/),
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
        "args": (v0/*: any*/),
        "handle": "connection",
        "key": "LikedBooks_loadLikedBooks",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LikedBooksQuery",
    "id": null,
    "text": "query LikedBooksQuery {\n  ...LikedBooks_query\n}\n\nfragment LikedBooks_query on Query {\n  loadLikedBooks(first: 10) {\n    edges {\n      node {\n        _id\n        id\n        image\n        likedByUser\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f1ba07d8a213e9fde411ac2b79f2bda5';
module.exports = node;
