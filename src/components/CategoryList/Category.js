import React from 'react'
import PropTypes from 'prop-types'
import { Anchor, Image } from './styles'

export const Category = ({ cover, path = '#', emoji, name }) => (
  <Anchor to={path}>
    <Image src={cover} />
    <span role="img" aria-label={`${name} category`}>
      {emoji}
    </span>
    
  </Anchor>
)
Category.propTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
}
