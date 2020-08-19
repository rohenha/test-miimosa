import { GraphQLClient } from "graphql-request";
import { IDatocms } from "Interfaces";

export function request({ query, variables, preview }: IDatocms) {
    const endpoint = preview
        ? `https://landing-test-gql-endpoint.miimosa.net/graphql/preview`
        : `https://landing-test-gql-endpoint.miimosa.net/graphql`;
    const client = new GraphQLClient(endpoint, {});
    return client.request(query, variables);
}
// https://landing-test-gql-endpoint.miimosa.net/graphql