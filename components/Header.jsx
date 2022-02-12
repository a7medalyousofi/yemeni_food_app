import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

function Header() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="border-b border-gray-100 bg-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <h2
            className="cursor-pointer font-bold text-orange-600"
            title="الصفحة الرئيسية"
          >
            المطبخ اليمني
          </h2>
        </Link>
        <ul className="flex items-center space-x-4 space-x-reverse">
          {categories.map((category) => (
            <li
              className="cursor-pointer text-sm font-semibold text-gray-500 hover:text-orange-600"
              key={category.slug}
            >
              <Link href={`/category/${category.slug}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
