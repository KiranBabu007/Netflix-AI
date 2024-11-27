import React from 'react'
import { IMG_CDN } from '../utils/constants'

const Moviecard = ({img}) => {
  if (!img) return null
  return (
    <div className='w-44 '>
      <img src={IMG_CDN+img} alt="" />
    </div>
  )
}

export default Moviecard
