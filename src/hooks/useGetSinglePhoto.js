import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'

const getSinglePhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export function useGetSinglePhoto(id) {
  const { loading, data, error } = useQuery(getSinglePhoto, { variables: { id } })
  return { loading, data, error }
}