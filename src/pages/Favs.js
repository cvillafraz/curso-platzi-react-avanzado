import React from 'react'
import { useGetFavs } from '../hooks/useGetFavs'
import { FavList } from '../components/FavList'
import { Loading } from '../components/general/Loading'
import { Layout } from '../components/general/Layout'

export default () => {
  const {loading, error, data: {favs}} = useGetFavs()
  const showFavs = () => {
    if(!loading && !favs) return null
    if(loading) return <Loading />
    if(error) return <p>No pudimos buscar tus fotos favoritas :(</p>
    return <FavList favs={favs} />
  }

  return(
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
      {showFavs()}
    </Layout>
  )
}
