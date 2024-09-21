import Slider from '@mui/material/Slider';
import { useState } from 'react'
import Good from '../assets/Good.svg'
import Loveit from '../assets/Loveit.svg'
import Neutral from '../assets/Neutral.svg'
import Worst from '../assets/Worst.svg'
import Fine from "../assets/It's just fine'.svg"

const Rating = () => {
    const [rating, setRating] = useState(1)

  return (
    <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
            <div className={`flex flex-col items-end w-[75px] h-[80px] ${rating !== 1 && 'opacity-30'}`}>
                <img src={Worst} alt="" className='h-[40px] w-[40px]' />
                <div className='font-semibold'>Worst</div>
            </div>
            <div className={`flex flex-col items-end w-[75px] h-[80px] ${rating !== 2 && 'opacity-30'}`}>
                <img src={Fine} alt="" className='h-[40px] w-[40px]' />
                <div className='font-semibold text-center'>Not<br/>Good</div>
            </div>
            <div className={`flex flex-col items-end w-[75px] h-[80px] ${rating !== 3 && 'opacity-30'}`}>
                <img src={Neutral} alt="" className='h-[40px] w-[40px]' />
                <div className='font-semibold'>Fine</div>
            </div>
            <div className={`flex flex-col items-end w-[75px] h-[80px] ${rating !== 4 && 'opacity-30'}`}>
                <img src={Good} alt="" className='h-[40px] w-[40px]' />
                <div className='font-semibold text-center'>Look<br/>Good</div>
            </div>
            <div className={`flex flex-col items-end w-[75px] h-[80px] ${rating !== 5 && 'opacity-30'}`}>
                <img src={Loveit} alt="" className='h-[40px] w-[40px]' />
                <div className='font-semibold text-center'>Very<br/>Good</div>
            </div>
        </div>
        <Slider min={0} max={5} className="!h-2" value={rating} onChange={(e)=> setRating(e.target.value)} />
    </div>
  )
}

export default Rating