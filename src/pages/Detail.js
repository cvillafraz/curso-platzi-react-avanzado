import React from 'react'
import PropTypes from 'prop-types'
import { SinglePhoto } from '../containers/SinglePhoto'
import { Layout } from '../components/general/Layout'

const Detail = ({ detailId }) => (
  <Layout title={`Fotografía ${detailId}`}>
    <SinglePhoto id={detailId} />
  </Layout>
)
Detail.propTypes={
  detailId: PropTypes.number.isRequired
}
export default Detail

