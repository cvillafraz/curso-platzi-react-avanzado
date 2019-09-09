import React from 'react'
import PropTypes from 'prop-types'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Link, navigate } from '@reach/router'
import { Article, ImgWrapper, Img, Button } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLikeMutation } from '../../hooks/useLikeMutation'

export const PhotoCard = ({ id, liked, likes, src }) => {
  const [show, element] = useNearScreen()
  const { updateLikes } = useLikeMutation()
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <Button
            onClick={() => {
              updateLikes({
                variables: {
                  input: { id }
                }
              }).catch(navigate('/login'))
            }}
          >
            <span aria-label="like button">
              <Icon size="32px" />
            </span>
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: (props, propName) => {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
    return null
  }
}
