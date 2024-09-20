import Slider from '@mui/material/Slider';
import { useState } from 'react'
import React from 'react'

const Rating = () => {
    const [rating, setRating] = React.useState(1)

  return (
    <Slider min={0} max={5} className="!h-2" value={rating} onChange={(e)=> setRating(e.target.value)} />
  )
}

export default Rating