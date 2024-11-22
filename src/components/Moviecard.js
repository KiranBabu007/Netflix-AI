import React from 'react'
import { IMG_CDN } from '../utils/constants'

const Moviecard = ({img}) => {
    
  return (
    <div className='w-56 pr-4'>
      <img src={IMG_CDN+img} alt="" />
    </div>
  )
}

export default Moviecard
