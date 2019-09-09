/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title } from './styles'
import { SubmitButton } from '../SubmitButton'
import { Fatal } from '../general/Fatal'

export const UserForm = ({ onSubmit, title, loading, error }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(email.value, password.value)
  }
  return (
    <>
      <Form onSubmit={handleSubmit} disabled={loading}>
        <Title>{title}</Title>
        <Input placeholder="Email" type="email" {...email} disabled={loading} />
        <Input
          placeholder="Password"
          type="password"
          {...password}
          disabled={loading}
        />
        <SubmitButton disabled={loading}>{title}</SubmitButton>
      </Form>
      {error && <Fatal message={error} />}
    </>
  )
}
UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool
}
