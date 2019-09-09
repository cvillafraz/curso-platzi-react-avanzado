import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const login = gql`
mutation login($input: UserCredentials!) {
  login (input: $input)
}
`
export function useLoginMutation(){
  const [mutation, { data, error, loading }] = useMutation(login)
  const loginUser = (email, password) => {
    return mutation({ variables: { input: { email, password } } })
  }
  return { loginUser, data, error, loading }
}