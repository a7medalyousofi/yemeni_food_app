import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getRecentMeals, getRelatedMeals } from '../services'
import moment from 'moment'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const MealWidget = ({ categories, slug }) => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    if (slug) {
      getRelatedMeals(categories, slug).then((result) => setMeals(result))
    } else {
      getRecentMeals().then((result) => setMeals(result))
    }
  }, [slug])

  return (
    <div className="cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white transition duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-200/20">
      <h3 className="border-b border-t-4 border-gray-100 border-t-orange-400 p-4 font-semibold text-orange-600">
        {slug ? 'قد يعجبك أيضاً' : 'آخر الوصفات'}
      </h3>
      <div className="space-y-4 p-4">
        {!meals ? (
          <div className="flex items-center gap-5">
            <div style={{ lineHeight: '1' }} className="h-14 w-14 rounded-lg">
              <Skeleton height="100%" width="100%" />
            </div>
            <div className="flex flex-col">
              <Skeleton height={15} width={100} count={1} />
              <Skeleton height={24} width={200} count={1} />
            </div>
          </div>
        ) : meals.length >= 1 ? (
          meals.map((meal) => (
            <div className="group flex items-center gap-5" key={meal.title}>
              <div className="h-14 w-14 overflow-hidden rounded-lg group-hover:shadow-lg group-hover:shadow-gray-300/20">
                <img className="h-full w-full" src={meal.image.url} />
              </div>
              <div className="flex flex-col">
                <p className="mt-1 text-xs text-gray-400">
                  {moment(meal.createdAt).format('YYYY/MM/DD')}
                </p>
                <Link href={`/meal/${meal.slug}`}>
                  <h4 className="group-hover:text-orange-600">{`${
                    meal.title.length > 30
                      ? `${meal.title.slice(0, 30)} ...`
                      : meal.title
                  }`}</h4>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className='text-sm'>لا يتوفر وجبات من نفس الصنف حالياً</p>
        )}
      </div>
    </div>
  )
}

export default MealWidget
