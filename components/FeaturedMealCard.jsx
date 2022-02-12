import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

const FeaturedMealCard = ({ meal }) => (
  <div className="relative h-64 w-full overflow-hidden rounded-lg">
    <Image
      loading="lazy"
      height="290px"
      width="290px"
      src={meal.image.url}
      alt={meal.title}
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-black/50 bg-center p-8  text-center text-xs leading-4 text-white">
      <p className="text-shadow mb-4 text-xs font-semibold text-white">
        {moment(meal.createdAt).format('MM / DD / YYYY')}
      </p>
      <Link href={`/meal/${meal.slug}`}>
        <p className="text-shadow cursor-pointer p-4 text-center text-2xl font-semibold text-white">
          {meal.title}
        </p>
      </Link>
    </div>
  </div>
  // <div className="relative h-72">
  //   <div
  //     className="absolute inline-block h-72 w-full   bg-cover bg-center bg-no-repeat shadow-md"
  //     style={{ backgroundImage: `url('${meal.image.url}')` }}
  //   >
  //     <div className="absolute h-72 w-full rounded-lg bg-gradient-to-b from-gray-400 via-gray-700 to-black bg-center opacity-50"></div>
  //     <div className="absolute flex h-full w-full flex-col items-center justify-center rounded-lg p-8">
  //       <p className="text-shadow mb-4 text-xs font-semibold text-white">
  //         {moment(meal.createdAt).format('MM / DD / YYYY')}
  //       </p>
  //       <p className="text-shadow p-4 text-center text-2xl font-semibold text-white">
  //         {meal.title}
  //       </p>
  //       <Link href={`/meal/${meal.slug}`}>
  //         <span className="absolute h-full w-full cursor-pointer" />
  //       </Link>
  //     </div>
  //   </div>
  // </div>
)

export default FeaturedMealCard
