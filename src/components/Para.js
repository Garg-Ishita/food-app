import React from 'react'
import './Para.css'
function Para({title , toggleMode , mode}) {
  return (
    <div className='para'>
    {/* “A recipe has no soul. You, as the cook, must bring the soul to the recipe.”
    – Thomas Keller */}
    {title}
    </div>
  )
}

export default Para