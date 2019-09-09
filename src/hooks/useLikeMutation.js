import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const likeMutation = gql`
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`

export function useLikeMutation(){
    const [updateLikes, loading, error] = useMutation(likeMutation)
    return {updateLikes, loading, error}
}