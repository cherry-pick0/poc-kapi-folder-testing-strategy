import { GraphQLClient } from "graphql-request"

const GraphQLProxy = () => {
  return new GraphQLClient(
    "https://swapi-graphql.netlify.app/.netlify/functions/index"
  )
}

export default GraphQLProxy
