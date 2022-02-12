import React from 'react'
import { useRouter } from 'next/router'

import { getCategories, getCategoryMeal } from '../../services'
import { MealCard, Categories, Loader } from '../../components'

const CategoryPost = ({ meals }) => {
  console.log('meals', meals)
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className="container mx-auto mb-8 py-10">
      <div className="grid grid-cols-1 gap-10 px-4 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {meals.map((meal, index) => (
              <MealCard key={index} meal={meal.node} />
            ))}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CategoryPost

// Fetch data at build time
export async function getStaticProps({ params }) {
  const meals = await getCategoryMeal(params.slug)

  return {
    props: { meals },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
