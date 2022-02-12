import React from 'react'
import { MealDetail, Categories, MealWidget, Loader } from '../../components'
import { getMeals, getMealDetails } from '../../services'
import { useRouter } from 'next/router'

const MealDetails = ({ meal }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }
  return (
    <div className="border-y border-gray-200 bg-white">
      {/* <Head>
        <title>المطبخ اليمني</title> اسم الوجبه جمب المطبخ اليمني
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 py-10 px-4 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <div className="">
              <MealDetail meal={meal} />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative space-y-8 lg:sticky lg:top-12">
              <MealWidget
                slug={meal.slug}
                categories={meal.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MealDetails

export async function getStaticProps({ params }) {
  const mealDetails = await getMealDetails(params.slug)

  return {
    props: { meal: mealDetails },
  }
}

export async function getStaticPaths() {
  const meals = await getMeals()

  return {
    paths: meals.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
