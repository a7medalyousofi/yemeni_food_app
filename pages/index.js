import Head from 'next/head'
import { MealCard, Categories, MealWidget } from '../components'
import { getMeals } from '../services'
import { FeaturedMeals } from '../sections'

import 'react-loading-skeleton/dist/skeleton.css'

export default function Home({ meals }) {
  return (
    <div className="border-y border-gray-100 bg-white">
      <Head>
        <title>المطبخ اليمني</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto space-y-10 py-10">
        <FeaturedMeals />
        <div className="grid grid-cols-1 gap-10 px-4 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {meals.map((meal) => (
                <MealCard meal={meal.node} key={meal.node.title} />
              ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative space-y-8 lg:sticky lg:top-12">
              <MealWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const meals = (await getMeals()) || []

  return {
    props: { meals },
  }
}
