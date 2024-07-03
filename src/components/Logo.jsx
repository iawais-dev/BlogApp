import React from 'react'

function Logo({
  className = ""
}) {
  return (
    <div className={`font-bold ${className}`}>InsightfulPages</div>
  )
}

export default Logo