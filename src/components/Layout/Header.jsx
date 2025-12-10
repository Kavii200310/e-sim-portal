import React from 'react'

function Header() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </svg>
      </div>
      <span className="font-semibold text-lg">Telco</span>
    </div>
  )
}

export default Header
