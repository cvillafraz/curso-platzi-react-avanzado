import React from 'react'
import PropTypes from 'prop-types'
import { PhotoCard } from './PhotoCard'

export const PhotoCardListComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => (
        <PhotoCard
          key={photo.id}
          id={photo.id}
          likes={photo.likes}
          liked={photo.liked}
          src={photo.src}
        />
      ))}
    </ul>
  )
}
PhotoCardListComponent.propTypes = {
  data: PropTypes.shape({
    photos: PropTypes.array
  })
}

