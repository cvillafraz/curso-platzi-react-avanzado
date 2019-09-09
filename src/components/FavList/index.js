import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Image, Link } from './styles'

export const FavList = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.map(fav => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} />
        </Link>
      ))}
    </Grid>
  )
}
FavList.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
