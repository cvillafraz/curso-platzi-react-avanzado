import React from 'react'
import PropTypes from 'prop-types'
import { Error } from './styles'

export const Fatal = ({ message }) => <Error>{message}</Error>

Fatal.propTypes = {
    message: PropTypes.string.isRequired
}