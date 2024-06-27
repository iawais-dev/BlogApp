import React , {useId} from 'react'

function Select({
    label ,
    className = "",
    options,
    ...props
} ,ref) {
    const id  = useId()
  return (
    
  <div>

        {label && <label htmlFor={id} className=''> </label>}
        <select 
        {...props}
        className={`  ${className}`}
        ref={ref}
        id={id}
        >
          {options?.map((option)=>(
            <option key={option} value={option} >
                {option}
            </option>

          ))}
        </select>
  </div>
  )
}

export default React.forwardRef(Select) 