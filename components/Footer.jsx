import Link from 'next/link'

function Footer() {
  return (
    <div className="border-t border-gray-200 bg-white">
      <div className="container mx-auto flex flex-col items-center space-y-2 p-4 md:flex-row md:justify-between md:space-y-0">
        <p className="text-center text-sm font-medium text-orange-600">
          منصة المطبخ اليمني {new Date().getFullYear()} ©
        </p>
        <p className="text-center text-sm font-medium text-orange-600">
          تصميم وبرمجة{' '}
          <Link href="https://www.facebook.com/a7medalyousofi/">
            احمد اليوسفي
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Footer
