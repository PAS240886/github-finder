import React from 'react'

function Footer() {
    const footYear = new Date().getFullYear()

  return (
    <footer className='footer p-3 bg-gray-700 text-primary-content footer-center'>
      <div>

        <p>Copyright {footYear}</p>
      </div>
    </footer>
  )
}

export default Footer
