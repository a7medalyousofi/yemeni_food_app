import React from 'react'
import Image from 'next/image'

const MealDetail = ({ meal }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3
            key={index}
            className="my-4 border-r-4 border-r-orange-600 pr-4 text-xl font-semibold text-orange-600"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p
            key={index}
            className="pr-4 leading-loose text-gray-600 before:absolute before:right-0 before:mt-3 before:h-1 before:w-1 before:bg-orange-600 before:content-['']"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }

  return (
    <div
      className="group space-y-5 rounded-xl border border-gray-100 bg-white p-4 transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300/20"
      key={meal.title}
    >
      <div className="relative h-[150px] w-full overflow-hidden rounded-lg transition duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-gray-400/10 lg:h-[400px]">
        <Image
          height="510px"
          width="1000px"
          className="h-full w-full"
          src={meal.image.url}
          alt={meal.title}
        />
        {meal.categories.length >= 1 && (
          <div className="absolute bottom-4 right-4 flex gap-2">
            {meal.categories.map((category) => (
              <p
                className="select-none rounded-md bg-white px-3 py-1 text-base font-medium text-orange-600"
                key={category.id}
              >
                {category.name}
              </p>
            ))}
          </div>
        )}
      </div>
      <h2 className="text-2xl font-semibold text-orange-600">{`${
        meal.title.length > 30 ? `${meal.title.slice(0, 30)} ...` : meal.title
      }`}</h2>
      <div className="relative">
        {meal.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          )

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default MealDetail
