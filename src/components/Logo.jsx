import React from 'react'

function Logo({
  className = ""
}) {
  return (
    <div className={`font-bold ${className}`}>MegaBlog</div>
  )
}

export default Logo