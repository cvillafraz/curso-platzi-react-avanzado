import React, { useEffect, useState } from 'react'
import { Category } from './Category'
import { List, Item } from './styles'
import { Loading } from '../general/Loading'

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window
      .fetch('https://petgram-server-ciro.cvillafraz.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

const CategoryListComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setFixed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const isFixed = window.scrollY > 200
      if (showFixed !== isFixed) setFixed(isFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  const renderList = fixed => (
    <List fixed={fixed}>
      {categories.map(category => (
        <Item key={category.id}>
          <Category
            cover={category.cover}
            emoji={category.emoji}
            name={category.name}
            path={`/pet/${category.id}`}
          />
        </Item>
      ))}
    </List>
  )
  if (!categories.length && !loading) return null
  if (loading) return <Loading />
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
export const CategoryList = React.memo(CategoryListComponent)
