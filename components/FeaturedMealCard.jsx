import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

const FeaturedMealCard = ({ meal }) => (
  <div className="relative h-64 w-full overflow-hidden rounded-lg">
    <Image
      loading="lazy"
      height="400px"
      width="400px"
      src={meal.image.url}
      alt={meal.title}
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-black/50 bg-center p-8  text-center text-xs leading-4 text-white">
      <p className="text-shadow mb-4 text-xs font-semibold text-white">
        {moment(meal.createdAt).format('MM / DD / YYYY')}
      </p>
      <Link href={`/meal/${meal.slug}`}>
        <p className="text-shadow cursor-pointer p-4 text-center text-xl font-semibold text-white md:text-2xl">
          {meal.title}
        </p>
      </Link>
    </div>
  </div>
)

export default FeaturedMealCard
