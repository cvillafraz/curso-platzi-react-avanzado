import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'
import { Context } from '../Context'

export default () => {
  const { activateAuth } = useContext(Context) 
  const {
    registerUser,
    error: errorReg,
    loading: loadingReg
  } = useRegisterMutation()
  const {
    loginUser,
    error: errorLog,
    loading: loadingLog
  } = useLoginMutation()

  const registerSubmit = (email, password) => {
    registerUser(email, password)
      .then(({ data: {signup} }) => {
        activateAuth(signup)
      })
  }

  const loginSubmit = (email, password) => {
    loginUser(email, password)
      .then(({ data: {login} }) => {
        activateAuth(login)
      })
  }
  const errorMsgReg = errorReg && 'El usuario ya existe o hay algún problema'
  const errorMsgLog =
    errorLog && 'La contraseña no es correcta o el usuario no existe'

  return (
    <>
      <UserForm
        error={errorMsgReg}
        loading={loadingReg}
        onSubmit={registerSubmit}
        title="Registrarse"
      />
      <UserForm
        error={errorMsgLog}
        loading={loadingLog}
        onSubmit={loginSubmit}
        title="Iniciar sesión"
      />
    </>
  )
}
