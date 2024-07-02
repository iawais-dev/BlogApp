import React from 'react'

function Button({
    children,
    type,
    className,
    ...prop
}) {
  return (
   <button 
   className={`m-2  text-white ${className}`} {...prop}
   >{children}</button>
  )
}

export default Button