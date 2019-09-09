import React from 'react'
import PropTypes from 'prop-types'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto'
import { PhotoCard } from '../components/PhotoCardList/PhotoCard'
import { Loading } from '../components/general/Loading'

export const SinglePhoto = ({ id }) => {
  const {
    loading,
    data: { photo }
  } = useGetSinglePhoto(id)
  if (!photo && !loading) return null
  if (loading && !photo) return <Loading />
  return <PhotoCard likes={photo.likes} src={photo.src} liked={photo.liked} />
}

SinglePhoto.propTypes = {
  id: PropTypes.number.isRequired
}
