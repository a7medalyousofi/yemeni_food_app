function Footer() {
  return (
    <div className="border-t border-gray-200 bg-white">
      <div className="container mx-auto p-4">
        <p className="text-center text-sm font-medium text-orange-600">
          جميع الحقوق محفوظة لمنصة المطبخ اليمني {new Date().getFullYear()} ©
        </p>
      </div>
    </div>
  )
}

export default Footer
