import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-8 mb-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a>
          </div>
          <p className="text-center text-gray-500 text-sm">
            © 2025 Telco SL. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
