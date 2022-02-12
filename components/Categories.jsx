import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white transition duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-200/20">
      <h3 className="border-b border-t-4 border-gray-100 border-t-orange-400 p-4 font-semibold text-orange-600">
        التصنيفات
      </h3>
      <div className=" space-y-4 p-4">
        {categories.map((category) => (
          <Link href={`/category/${category.slug}`} key={category.name}>
            <p className="hover:text-orange-600">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
