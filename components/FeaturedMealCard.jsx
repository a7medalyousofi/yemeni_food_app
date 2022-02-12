import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const FeaturedMealCard = ({ meal }) => (
  <div className="relative h-72">
    <div
      className="absolute inline-block h-72 w-full rounded-lg bg-cover bg-center bg-no-repeat shadow-md"
      style={{ backgroundImage: `url('${meal.image.url}')` }}
    >
      <div className="absolute h-72 w-full rounded-lg bg-gradient-to-b from-gray-400 via-gray-700 to-black bg-center opacity-50"></div>
      <div className="absolute flex h-full w-full flex-col items-center justify-center rounded-lg p-8">
        <p className="text-shadow mb-4 text-xs font-semibold text-white">
          {moment(meal.createdAt).format('MM / DD / YYYY')}
        </p>
        <p className="text-shadow p-4 text-center text-2xl font-semibold text-white">
          {meal.title}
        </p>
        <Link href={`/meal/${meal.slug}`}>
          <span className="absolute h-full w-full cursor-pointer" />
        </Link>
      </div>
    </div>
  </div>
)

export default FeaturedMealCard
