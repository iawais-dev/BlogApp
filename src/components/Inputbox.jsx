import React , {useId} from 'react'

const Inputbox = React.forwardRef(({
    Label,
    type = "text" ,
    classNames = "",
    ...props
},ref)=>{
    const id = useId()
    return (
        <div>
             {Label &&  <label htmlFor={id} className=''>
                  {Label}
              </label>}     
              <input type={type} 
              className={` ${classNames}`} 
              {...props} 
              ref={ref}
              id={id}
              />
        </div>
    
   
    )
    
  

})

export default Inputbox