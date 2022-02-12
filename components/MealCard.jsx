import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function MealCard({ meal }) {
  return (
    <div
      className="group cursor-pointer space-y-5 rounded-xl border border-gray-100 bg-white p-4 transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300/20"
      key={meal.title}
    >
      <div className="relative h-[240px] w-full overflow-hidden rounded-lg transition duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-gray-400/10">
        <Image
          loading="lazy"
          height="400px"
          width="400px"
          className="h-full w-full"
          src={`${meal.image.url}`}
          alt={meal.title}
        />

        {meal.categories.length >= 1 && (
          <div className="absolute bottom-4 right-4 flex gap-2">
            {meal.categories.map((category) => (
              <p
                className="select-none rounded-md bg-white px-2 py-1 text-xs font-medium text-orange-600"
                key={category.id}
              >
                {category.name}
              </p>
            ))}
          </div>
        )}
      </div>
      <Link href={`/meal/${meal.slug}`}>
        <h2 className="text-xl font-semibold text-orange-600">{`${
          meal.title.length > 30 ? `${meal.title.slice(0, 30)} ...` : meal.title
        }`}</h2>
      </Link>
      <p className="text-sm font-medium leading-loose text-gray-500">{`${meal.excerpt.slice(
        0,
        90
      )} ...`}</p>
    </div>
  )
}

export default MealCard
