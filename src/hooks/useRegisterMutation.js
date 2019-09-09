import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'


const register = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`
export function useRegisterMutation() {
  const [mutation, { data, error, loading }] = useMutation(register)
  const registerUser = (email, password) => {
    return mutation({ variables: { input: { email, password } } })
  }
  return { registerUser, data, error, loading }
}
