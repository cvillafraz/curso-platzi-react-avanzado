import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { CategoryList } from '../components/CategoryList'
import { PhotoCardList } from '../containers/PhotoCardList'

const HomePage = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Petgram: Tu app de fotos de mascotas</title>
        <meta
          name="description"
          content="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos"
        />
      </Helmet>
      <CategoryList />
      <PhotoCardList categoryId={id} />
    </>
  )
}
HomePage.propTypes ={
  id: PropTypes.number
}
export default React.memo(
  HomePage,
  (prevProps, props) => prevProps.id === props.id
)
