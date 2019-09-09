import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export function useGetFavs(){
    const {loading, error, data} = useQuery(GET_FAVS, {fetchPolicy: 'cache-and-network'})

    return {loading, error, data}
}